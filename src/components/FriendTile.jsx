import React, { PureComponent } from 'react';
import {
  Text,
} from 'react-native';
import { PropTypes } from 'prop-types';

import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from './styles/FriendTileStyles';

export default class FriendTile extends PureComponent {
  render() {
    const {
      userName,
      userId,
    } = this.props;
    return (
      <TouchableOpacity style={styles.outerTile}>
        <Text style={styles.username}>{userName}</Text>
      </TouchableOpacity>
    );
  }
}

FriendTile.propTypes = {
  userName: PropTypes.string.isRequired,
  userId: PropTypes.string.isRequired,
};
