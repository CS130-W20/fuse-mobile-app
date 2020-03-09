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
  currentFriendStatus, friendStatusStateModifier, targetProfileId,
) {
  switch (currentFriendStatus) {
    case FriendStatus.friend: {
      // eslint-disable-next-line no-console
      console.log('Unfriended... fake ass friend... TODO make real mutation', targetProfileId);
      friendStatusStateModifier(FriendStatus.notFriend);
      break;
    }
    case FriendStatus.notFriend: {
      // eslint-disable-next-line no-console
      console.log('Yayy added friend... TODO make real mutation', targetProfileId);
      friendStatusStateModifier(FriendStatus.requested);
      break;
    }
    case FriendStatus.requested: {
      // eslint-disable-next-line no-console
      console.log('Prompt to unreqeust... TODO make real implementation', targetProfileId);
      friendStatusStateModifier(FriendStatus.friend);
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
    case FriendStatus.friend: {
      buttonText = 'Friends';
      iconName = 'check';
      break;
    }
    case FriendStatus.notFriend: {
      buttonText = 'Add Friend';
      iconName = 'plus';
      break;
    }
    case FriendStatus.requested: {
      buttonText = 'Requested';
      iconName = 'arrow-right';
      buttonStateStyles = styles.requestedButton;
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
