import React, { PureComponent } from 'react';
import {
  Text,
} from 'react-native';
import { PropTypes } from 'prop-types';

import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from './styles/FriendTileStyles';
import screenIds from '../navigation/ScreenIds';

export default class FriendTile extends PureComponent {
  onPress() {
    const { navigation, userId } = this.props;
    navigation.push(screenIds.userProfile, {
      profileId: userId,
    });
  }

  render() {
    const {
      userName,
      // eslint-disable-next-line no-unused-vars
      userId,
    } = this.props;
    return (
      <TouchableOpacity
        style={styles.outerTile}
        onPress={() => this.onPress()}
      >
        <Text style={styles.username}>{userName}</Text>
      </TouchableOpacity>
    );
  }
}

FriendTile.propTypes = {
  userName: PropTypes.string.isRequired,
  userId: PropTypes.string.isRequired,
  navigation: PropTypes.shape({
    push: PropTypes.func.isRequired,
    goBack: PropTypes.func.isRequired,
  }).isRequired,
};
