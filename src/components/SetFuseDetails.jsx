import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import { useMutation, useApolloClient } from '@apollo/react-hooks';
import { Feather } from '@expo/vector-icons';

import UserList from './UserList';
import FuseSubmitButton from './FuseSubmitButton';
import {
  JOIN_EVENT, LEAVE_EVENT, USER_QUERY, UPDATE_EVENT_STATUS,
} from '../graphql/GeneralQueries';
import Spacer from '../helpers/Spacer';
import Divider from '../helpers/Divider';
import styles from './styles/FuseDetailsStyles';
import screenIds from '../navigation/ScreenIds';
import { EVENTSTATUS } from '../constants';

const defaultSpacing = 30;

export default function SetFuseDetails({
  eventId, title, description, owner, createdAt, invitedUsers,
  joinedUsers, refetchEvent, navigation,
}) {
  const client = useApolloClient();
  const { me: selfUser } = client.readQuery({ query: USER_QUERY });

  const userIsOwner = selfUser.id === owner.id;

  let userFoundInJoined = false;
  if (selfUser) {
    userFoundInJoined = joinedUsers.filter((user) => user.id === selfUser.id).length > 0;
  }
  const userIsJoined = userFoundInJoined;

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
  const [lightFuseMutator] = useMutation(UPDATE_EVENT_STATUS, {
    variables: {
      eventId,
      currentStatus: EVENTSTATUS.set,
      newStatus: EVENTSTATUS.lit,
    },
  });

  const onPressOwner = () => {
    navigation.push(screenIds.userProfile, {
      profileId: owner.id,
    });
  };

  const onPressJoin = () => {
    joinEventMutator()
      .then((msg) => {
        // eslint-disable-next-line no-console
        console.log(msg);
        // TODO disable when testing to enable fast reload
        refetchEvent();
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
        refetchEvent();
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log(err);
      });
  };

  const onPressLight = () => {
    lightFuseMutator()
      .then((msg) => {
        // eslint-disable-next-line no-console
        console.log(msg);
        // TODO disable when testing to enable fast reload
        refetchEvent();
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log(err);
      });
  };

  const showActionButtons = () => {
    if (userIsOwner) {
      return (
        <FuseSubmitButton
          buttonName="Light Fuse"
          onPress={() => onPressLight()}
          accented
        />
      );
    }

    if (userIsJoined) {
      return (
        <FuseSubmitButton
          buttonName="Leave Fuse"
          onPress={() => onPressLeave()}
          accented
        />
      );
    }

    return (
      <FuseSubmitButton
        buttonName="Join Fuse"
        onPress={() => onPressJoin()}
        accented
      />
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
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
        {/* Body */}
        <View style={styles.bodyWrapper}>
          {/* Event title */}
          <View style={styles.titleWrapper}>
            <Text style={styles.titleText}>
              {title}
            </Text>
          </View>

          <Spacer padding={defaultSpacing} />

          {/* Event description */}
          <View style={styles.descriptionWrapper}>
            <Text style={styles.descriptionText}>
              {description}
            </Text>
          </View>

          <Spacer padding={defaultSpacing} />
          <Divider />
          <Spacer padding={defaultSpacing} />

          {/* Event owner */}
          <TouchableOpacity style={styles.ownerWrapper} onPress={() => onPressOwner()}>
            <Image
              style={styles.profileImage}
            />
            <Text style={styles.fieldLabel}>Set by </Text>
            <Text style={styles.ownerText}>
              {owner.name}
            </Text>
          </TouchableOpacity>

          <Spacer padding={defaultSpacing} />

          {/* Created at */}
          <Text style={styles.timeText}>
            {Date(createdAt)}
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
        <Spacer padding={defaultSpacing} />
      </ScrollView>
    </View>
  );
}

SetFuseDetails.propTypes = {
  eventId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  owner: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  createdAt: PropTypes.string.isRequired,
  invitedUsers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
  joinedUsers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
  refetchEvent: PropTypes.func.isRequired,
  navigation: PropTypes.shape({
    push: PropTypes.func.isRequired,
    navigate: PropTypes.func.isRequired,
    goBack: PropTypes.func.isRequired,
  }).isRequired,
};
