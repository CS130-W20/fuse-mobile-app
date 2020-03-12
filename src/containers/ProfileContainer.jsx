import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  ScrollView,
} from 'react-native';
import PropTypes from 'prop-types';
import { useQuery, useMutation, useApolloClient } from '@apollo/react-hooks';

// eslint-disable-next-line import/no-named-as-default
import ProfileHeader from '../components/ProfileHeader';
import FriendButton, { onPressFriendButtonControl } from '../components/FriendButton';
import NewFuseButton from '../components/NewFuseButton';
import ViewToggle from '../components/ViewToggle';
import Spacer from '../helpers/Spacer';
import EventTile from '../components/EventTile';
import {
  USER_EVENTS_QUERY,
  USER_PROFILE_DETAILS_QUERY,
  FRIENDS_COUNT,
  COMPLETED_EVENTS_COUNT,
  USER_QUERY,
  FRIEND_PROFILE_EVENTS,
  GET_FRIEND_STATUS,
  REQUEST_FRIEND,
  CONFIRM_FRIEND,
  REMOVE_FRIEND,
} from '../graphql/GeneralQueries';

import { FriendStatus } from '../constants';
import styles from './styles/ProfileContainerStyles';

export default function ProfileContainer({ profileId, navigation }) {
  const [focusedView, setFocusedView] = useState(0);
  const [profileData, setProfileData] = useState({
    name: '',
    bio: '',
    score: 0,
    friendCount: 0,
    completedEventCount: 0,
    userId: '',
  });
  const [profileFuses, setProfileFuses] = useState({
    set: [],
    lit: [],
    completed: [],
  });
  const [friendStatus, setFriendStatus] = useState(FriendStatus.loading);

  // Read from cache
  const client = useApolloClient();
  // eslint-disable-next-line no-unused-vars
  const { me: currentUser } = client.readQuery({ query: USER_QUERY });

  const isCurrentUser = currentUser.id === profileId;
  const isFriend = true; // TODO actually check for friend validity

  // Fetch using Fuse API
  const {
    data: friendStatusQueryData,
    loading: friendStatusQueryLoading,
    error: friendStatusQueryError,
    refetch: refetchFriendStatus,
  } = useQuery(GET_FRIEND_STATUS, {
    skip: isCurrentUser,
    variables: {
      friendUserId: profileId,
    },
  });
  const {
    data: userEventQueryData,
    loading: userEventQueryLoading,
  } = useQuery(USER_EVENTS_QUERY, {
    skip: !isCurrentUser,
  });
  const {
    data: friendEventQueryData,
    loading: friendEventQueryLoading,
  } = useQuery(FRIEND_PROFILE_EVENTS, {
    variables: {
      friendUserId: profileId,
    },
    skip: !isFriend,
  });
  const {
    data: profileDetailsQueryData,
    loading: profileDetailsQueryLoading,
    // eslint-disable-next-line no-unused-vars
    error: profileDetailsQueryError,
  } = useQuery(USER_PROFILE_DETAILS_QUERY, {
    variables: {
      id: profileId,
    },
  });
  const {
    data: friendCountQueryData,
    loading: friendCountQueryLoading,
    // eslint-disable-next-line no-unused-vars
    error: friendCountQueryError,
    refetch: refetchFriendCount,
  } = useQuery(FRIENDS_COUNT, {
    variables: {
      userId: profileId,
    },
  });
  const {
    data: completedEventCountQueryData,
    loading: completedEventCountQueryLoading,
    // eslint-disable-next-line no-unused-vars
    error: completedEventCountQueryError,
  } = useQuery(COMPLETED_EVENTS_COUNT, {
    variables: {
      userId: profileId,
    },
  });

  // Mutators
  const [
    requestFriendMutator,
  ] = useMutation(REQUEST_FRIEND);
  const [
    confirmFriendMutator,
  ] = useMutation(CONFIRM_FRIEND);
  const [
    removeFriendMutator,
  ] = useMutation(REMOVE_FRIEND);

  // eslint-disable-next-line no-unused-vars
  const getProfileData = async () => {
    const { user } = profileDetailsQueryData;
    setProfileData({
      name: user.name,
      bio: user.bio,
      score: user.score,
      friendCount: friendCountQueryData.friendsCount,
      completedEventCount: completedEventCountQueryData.completedEventsCount,
      userId: user.id,
    });
  };

  // eslint-disable-next-line no-unused-vars
  const getProfileFuses = async () => {
    let parsedFuseData;
    if (isCurrentUser) {
      parsedFuseData = userEventQueryData.me.events;
    } else if (isFriend) {
      parsedFuseData = friendEventQueryData.friendProfileEvents;
    }

    const setFuses = [];
    const litFuses = [];
    const completedFuses = [];

    parsedFuseData.forEach((fuse) => {
      // TODO eventually transition to using enum for fuse states
      switch (fuse.status) {
        case 'SET':
          setFuses.push(fuse);
          break;
        case 'LIT': {
          litFuses.push(fuse);
          break;
        }
        case 'COMPLETED': {
          completedFuses.push(fuse);
          break;
        }
        default:
          break;
      }
    });

    setProfileFuses({
      set: setFuses,
      lit: litFuses,
      completed: completedFuses,
    });
  };

  const showToggledView = () => {
    let fuseListToShow;


    switch (focusedView) {
      case 0:
        fuseListToShow = profileFuses.set;
        break;
      case 1:
        fuseListToShow = profileFuses.lit;
        break;
      case 2:
        fuseListToShow = profileFuses.completed;
        break;
      default:
    }

    if (fuseListToShow.length === 0) {
      // TODO replace text
      return (
        <Text>No fuses</Text>
      );
    }

    return fuseListToShow.map((fuse) => (
      <View
        style={styles.tileWrapper}
        key={fuse.title}
      >
        <EventTile
          eventId={fuse.id}
          eventName={fuse.title}
          eventCreator={fuse.owner.name}
          description={fuse.description}
          eventStage={fuse.status}
          eventView={0}
          eventRelation={0}
          navigation={navigation}
          testID="profileEventTile"
        />
      </View>
    ));
  };

  const onPressFriendButton = () => (
    onPressFriendButtonControl(
      friendStatus, setFriendStatus, profileId,
      requestFriendMutator, confirmFriendMutator, removeFriendMutator,
    )
  );

  useEffect(() => {
    // Refetch queries on page refresh
    refetchFriendStatus();
    refetchFriendCount();
  }, []);

  useEffect(() => {
    if (friendStatusQueryData && !friendStatusQueryLoading) {
      setFriendStatus(friendStatusQueryData.friendshipStatus);
    }
  }, [friendStatusQueryData, friendStatusQueryLoading, friendStatusQueryError]);

  useEffect(() => {
    if (userEventQueryData && !userEventQueryLoading) {
      getProfileFuses();
    }
  }, [userEventQueryData, userEventQueryLoading]);

  useEffect(() => {
    if (friendEventQueryData && !friendEventQueryLoading) {
      getProfileFuses();
    }
  }, [friendEventQueryData, friendEventQueryLoading]);

  useEffect(() => {
    if (
      profileDetailsQueryData && !profileDetailsQueryLoading
      && friendCountQueryData && !friendCountQueryLoading
      && completedEventCountQueryData && !completedEventCountQueryLoading
    ) {
      getProfileData();
    }
  }, [
    profileDetailsQueryData, profileDetailsQueryLoading,
    friendCountQueryData, friendCountQueryLoading,
    completedEventCountQueryData, completedEventCountQueryLoading,
  ]);

  return (
    <View style={styles.wrapper} testID="userProfile">
      <ScrollView style={styles.scrollView}>
        <ProfileHeader
          name={profileData.name}
          bio={profileData.bio}
          score={profileData.score}
          friendCount={profileData.friendCount}
          completedEventCount={profileData.completedEventCount}
          testID="userProfileName"
          userId={profileData.userId}
          navigation={navigation}
        />
        <Spacer padding={20} />
        {
          isCurrentUser
            ? null
            : (
              <>
                <View style={styles.friendButtonWrapper}>
                  <FriendButton friendStatus={friendStatus} onPress={onPressFriendButton} />
                </View>
                <Spacer padding={20} />
              </>
            )
        }
        <ViewToggle
          viewToggler={setFocusedView}
          testID="userEvents"
        />
        <Spacer padding={5} />
        {showToggledView()}
      </ScrollView>
      <NewFuseButton navigation={navigation} testID="addEventButton" />
    </View>
  );
}

ProfileContainer.propTypes = {
  profileId: PropTypes.string.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    goBack: PropTypes.func.isRequired,
  }).isRequired,
};
