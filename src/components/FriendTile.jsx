import React, { PureComponent } from 'react';
import {
  Text,
  View,
  Image,
} from 'react-native';
import { PropTypes } from 'prop-types';
import { TouchableOpacity } from 'react-native-gesture-handler';
import getUserProfileUrl from '../helpers';
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

    if (userId === '') {
      return (
        <View style={styles.outerTile}>
          <Text style={styles.username}>-</Text>
        </View>
      );
    }

    return (
      <TouchableOpacity
        style={styles.outerTile}
        onPress={() => this.onPress()}
      >
        <Image
          source={{ uri: getUserProfileUrl(userId) }}
          style={styles.profileImage}
        />
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
