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
import CalendarDate from './datetime/CalendarDate';
import {
  USER_QUERY, UNDO_COMPLETE_EVENT,
} from '../graphql/GeneralQueries';
import getUserProfileUrl from '../helpers';
import Spacer from '../helpers/Spacer';
import Divider from '../helpers/Divider';
import styles from './styles/FuseDetailsStyles';
import screenIds from '../navigation/ScreenIds';

const defaultSpacing = 30;

export default function CompletedFuseDetails({
  eventId, title, description, completedAt, owner,
  joinedUsers, refetchEvent, navigation,
}) {
  const client = useApolloClient();
  const { me: selfUser } = client.readQuery({ query: USER_QUERY });

  const userIsOwner = selfUser.id === owner.id;

  const [undoCompleteFuse] = useMutation(UNDO_COMPLETE_EVENT, {
    variables: {
      eventId,
    },
  });

  const onPressOwner = () => {
    navigation.push(screenIds.userProfile, {
      profileId: owner.id,
    });
  };

  const onPressUndoComplete = () => {
    undoCompleteFuse()
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
        <>
          <FuseSubmitButton
            buttonName="Undo Complete Fuse"
            onPress={() => onPressUndoComplete()}
          />
        </>
      );
    }

    return null;
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

          {/* Completion date */}
          <Text style={styles.sectionHeader}>Completed on</Text>
          <Spacer padding={15} />
          <View style={styles.scheduleWrapper}>
            <CalendarDate date={completedAt} />
          </View>

          <Spacer padding={defaultSpacing} />
          <Divider />
          <Spacer padding={defaultSpacing} />

          {/* Event owner */}
          <TouchableOpacity style={styles.ownerWrapper} onPress={() => onPressOwner()}>
            <Image
              source={{ uri: getUserProfileUrl(owner.id) }}
              style={styles.profileImage}
            />
            <Text style={styles.fieldLabel}>Completed by </Text>
            <Text style={styles.ownerText}>
              {owner.name}
            </Text>
          </TouchableOpacity>

          <Spacer padding={defaultSpacing} />
          <Divider />
          <Spacer padding={defaultSpacing} />

          {/* Joined list */}
          <Text style={styles.sectionHeader}>Participants</Text>
          <Spacer padding={15} />
          <UserList users={joinedUsers} navigation={navigation} />

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

CompletedFuseDetails.propTypes = {
  eventId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  completedAt: PropTypes.string.isRequired,
  owner: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
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
