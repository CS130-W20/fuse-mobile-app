/* eslint-disable no-use-before-define */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import { useQuery, useMutation, useApolloClient } from '@apollo/react-hooks';
import { Feather } from '@expo/vector-icons';

import UserList from './UserList';
import FuseSubmitButton from './FuseSubmitButton';
import {
  EVENT, JOIN_EVENT, LEAVE_EVENT, USER_QUERY,
} from '../graphql/GeneralQueries';
import Spacer from '../helpers/Spacer';
import Divider from '../helpers/Divider';
import styles from './styles/SetFuseDetailsStyles';

const defaultSpacing = 20;

export default function SetFuseDetails({ route, navigation }) {
  const { eventId } = route.params;
  const client = useApolloClient();

  const [invitedUsers, setInvitedUsers] = useState([]);
  const [joinedUsers, setJoinedUsers] = useState([]);
  const [userIsJoined, setUserIsJoined] = useState(null);
  const [userIsOwner, setUserIsOwner] = useState(null);

  const { me: selfUser } = client.readQuery({ query: USER_QUERY });
  const {
    data: eventQueryData,
    loading: eventQueryLoading,
    refetch: refetchEventQuery,
  } = useQuery(EVENT,
    {
      variables: {
        eventId,
      },
    });

  const [joinEventMutator] = useMutation(JOIN_EVENT, {
    variables: {
      eventId,
    },
  });
  const [leaveEventMutator] = useMutation(LEAVE_EVENT, {
    variables: {
      eventId,
    },
  });

  useEffect(() => {
    // TODO disable when testing to enable fast reload
    refetchEventQuery();
  }, []);

  useEffect(() => {
    if (eventQueryData && !eventQueryLoading) {
      // eslint-disable-next-line no-console
      console.log(eventQueryData);

      setUserIsOwner(selfUser.id === eventQueryData.event.owner.id);

      setInvitedUsers(
        eventQueryData.event.invited.map((invitee) => ({
          id: invitee.id,
          name: invitee.name,
        })),
      );
      setJoinedUsers(
        eventQueryData.event.joined.map((joinee) => ({
          id: joinee.id,
          name: joinee.name,
        })),
      );
    }
  }, [
    eventQueryData, eventQueryLoading,
  ]);

  useEffect(() => {
    let userFoundInJoined = false;
    if (selfUser) {
      userFoundInJoined = joinedUsers.filter((user) => user.id === selfUser.id).length > 0;
    }
    setUserIsJoined(userFoundInJoined);
  }, [joinedUsers, invitedUsers]);

  const onPressJoin = () => {
    joinEventMutator()
      .then((msg) => {
        // eslint-disable-next-line no-console
        console.log(msg);
        // TODO disable when testing to enable fast reload
        refetchEventQuery();
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log(err);
      });
  };

  const onPressLeave = () => {
    leaveEventMutator()
      .then((msg) => {
        // eslint-disable-next-line no-console
        console.log(msg);
        // TODO disable when testing to enable fast reload
        refetchEventQuery();
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log(err);
      });
  };

  const onPressLight = () => {
    // eslint-disable-next-line no-console
    console.log('ITS LITTTTT');
  };

  const showActionButtons = () => {
    if (userIsOwner) {
      return (
        <FuseSubmitButton
          buttonName="Light Fuse"
          onPress={() => onPressLight()}
        />
      );
    }

    if (userIsJoined) {
      return (
        <FuseSubmitButton
          buttonName="Leave Fuse"
          onPress={() => onPressLeave()}
        />
      );
    }

    return (
      <FuseSubmitButton
        buttonName="Join Fuse"
        onPress={() => onPressJoin()}
      />
    );
  };

  if (!eventQueryData) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.leftHeaderWrapper}>
          <TouchableOpacity onPress={navigation.goBack}>
            <Feather
              name="chevron-left"
              style={styles.backButton}
              testID="newFuseBackButton"
            />
          </TouchableOpacity>
        </View>
        <View style={styles.centerHeaderWrapper}>
          {/* <Text style={styles.headerTitle}>SET</Text> */}
        </View>
        <View style={styles.rightHeaderWrapper} />
        <View style={styles.backWrapper} />
      </View>

      <ScrollView style={styles.scrollView}>
        <View style={styles.bodyWrapper}>
          {/* Event title */}
          <View style={styles.titleWrapper}>
            <Text style={styles.titleText}>
              {eventQueryData.event.title}
            </Text>
          </View>

          <Spacer padding={defaultSpacing} />

          {/* Event description */}
          <View style={styles.descriptionWrapper}>
            <Text style={styles.descriptionText}>
              {eventQueryData.event.description}
            </Text>
          </View>

          <Spacer padding={defaultSpacing} />
          <Divider />
          <Spacer padding={defaultSpacing} />

          {/* Event owner */}
          <View style={styles.ownerWrapper}>
            <Image
              style={styles.profileImage}
            />
            <Text style={styles.fieldLabel}>Set by: </Text>
            <Text style={styles.ownerText}>
              {eventQueryData.event.owner.name}
            </Text>
          </View>

          <Spacer padding={defaultSpacing} />

          {/* Created at */}
          <Text style={styles.timeText}>
            {Date(eventQueryData.event.createdAt)}
          </Text>

          <Spacer padding={defaultSpacing} />
          <Divider />
          <Spacer padding={defaultSpacing} />

          {/* Joined list */}
          <Text style={styles.sectionHeader}>Joined</Text>
          <Spacer padding={15} />
          <UserList users={joinedUsers} navigation={navigation} />

          <Spacer padding={defaultSpacing} />
          <Divider />
          <Spacer padding={defaultSpacing} />

          {/* Invited list */}
          <Text style={styles.sectionHeader}>Invited</Text>
          <Spacer padding={15} />
          <UserList users={invitedUsers} navigation={navigation} />

          <Spacer padding={defaultSpacing * 2} />
          {/* Action button: join/leave event */}
          <View style={styles.actionButtonsWrapper}>
            {showActionButtons()}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

SetFuseDetails.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({
      eventId: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    goBack: PropTypes.func.isRequired,
  }).isRequired,
};
