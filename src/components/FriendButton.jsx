import React from 'react';
import {
  Text,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import { Feather } from '@expo/vector-icons';

import { FriendStatus } from '../constants';
import styles from './styles/FriendButtonStyles';

export function onPressFriendButtonControl(
  currentFriendStatus, refreshFriendStatus, targetProfileId,
  requestFriendMutator, confirmFriendMutator, removeFriendMutator,
) {
  switch (currentFriendStatus) {
    case FriendStatus.confirmed: {
      // eslint-disable-next-line no-console
      removeFriendMutator({
        variables: {
          userId: targetProfileId,
        },
      }).then((message) => {
        // eslint-disable-next-line no-console
        console.log('friend request response: ', message);
        refreshFriendStatus();
      }).catch((err) => {
        // eslint-disable-next-line no-console
        console.log(err);
      });
      break;
    }
    case FriendStatus.none: {
      requestFriendMutator({
        variables: {
          userId: targetProfileId,
        },
      }).then((message) => {
        // eslint-disable-next-line no-console
        console.log('friend request response: ', message);
        refreshFriendStatus();
      }).catch((err) => {
        // eslint-disable-next-line no-console
        console.log(err);
      });
      break;
    }
    case FriendStatus.sentRequest: {
      // eslint-disable-next-line no-console
      console.log('Prompt to unreqeust... TODO make real implementation', targetProfileId);
      // friendStatusStateModifier(FriendStatus.friend);
      break;
    }
    case FriendStatus.receivedRequest: {
      confirmFriendMutator({
        variables: {
          userId: targetProfileId,
        },
      }).then((message) => {
        // eslint-disable-next-line no-console
        console.log('friend accept response: ', message);
        refreshFriendStatus();
      }).catch((err) => {
        // eslint-disable-next-line no-console
        console.log(err);
      });
      break;
    }
    default:
      break;
  }
}

export default function FriendButton({ friendStatus, onPress }) {
  let buttonText;
  let iconName;
  let buttonStateStyles;

  switch (friendStatus) {
    case FriendStatus.confirmed: {
      buttonText = 'Friends';
      iconName = 'check';
      break;
    }
    case FriendStatus.none: {
      buttonText = 'Add Friend';
      iconName = 'plus';
      break;
    }
    case FriendStatus.sentRequest: {
      buttonText = 'Requested';
      iconName = 'arrow-right';
      buttonStateStyles = styles.requestedButton;
      break;
    }
    case FriendStatus.receivedRequest: {
      buttonText = 'Accept Request';
      iconName = 'plus';
      break;
    }
    case FriendStatus.loading: {
      buttonText = 'Loading...';
      break;
    }
    default:
      break;
  }

  return (
    <TouchableOpacity
      onPress={onPress}
      style={{ ...styles.buttonWrapper, ...buttonStateStyles }}
    >
      <Feather name={iconName} style={styles.icon} />
      <Text style={styles.buttonText}>{buttonText}</Text>
    </TouchableOpacity>
  );
}

FriendButton.propTypes = {
  friendStatus: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};
