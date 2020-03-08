import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  ScrollView,
} from 'react-native';
import PropTypes from 'prop-types';
import { useQuery, useApolloClient } from '@apollo/react-hooks';

import ProfileHeader from '../components/ProfileHeader';
import NewFuseButton from '../components/NewFuseButton';
import ViewToggle from '../components/ViewToggle';
import Spacer from '../helpers/Spacer';
import {
  USER_EVENTS_QUERY,
  USER_PROFILE_DETAILS_QUERY,
  FRIENDS_COUNT,
  COMPLETED_EVENTS_COUNT,
  USER_QUERY,
} from '../graphql/GeneralQueries';

import styles from './styles/ProfileContainerStyles';
import EventTile from '../components/EventTile';

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

  // Read from cache
  const client = useApolloClient();
  // eslint-disable-next-line no-unused-vars
  const { me: currentUser } = client.readQuery({ query: USER_QUERY });

  // Fetch using Fuse API
  const {
    data: eventQueryData,
    loading: eventQueryLoading,
  } = useQuery(USER_EVENTS_QUERY);
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
    const parsedFuseData = eventQueryData.me.events;

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
          eventName={fuse.title}
          eventCreator={fuse.owner.name}
          description={fuse.description}
          eventStage={fuse.status}
          eventView={0}
          eventRelation={0}
        />
      </View>
    ));
  };

  useEffect(() => {
    // TODO make different call to fetch friend events if not personal id
  }, []);

  useEffect(() => {
    if (eventQueryData && !eventQueryLoading) {
      getProfileFuses();
    }
  }, [eventQueryData, eventQueryLoading]);

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
    <View style={styles.wrapper}>
      <ScrollView style={styles.scrollView}>
        <ProfileHeader
          name={profileData.name}
          bio={profileData.bio}
          score={profileData.score}
          friendCount={profileData.friendCount}
          completedEventCount={profileData.completedEventCount}
          userId={profileData.userId}
        />
        <Spacer padding={20} />
        <ViewToggle
          viewToggler={setFocusedView}
        />
        <Spacer padding={5} />
        {showToggledView()}
      </ScrollView>
      <NewFuseButton navigation={navigation} />
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
