import React from 'react';
import {
  View,
} from 'react-native';
import { PropTypes } from 'prop-types';

import FriendTile from './FriendTile';

export default function UserList({ userMap, navigation }) {
  return (
    <View>
      {userMap.map((user) => (
        <FriendTile
          userName={user.name}
          userId={user.id}
          key={user.id}
          navigation={navigation}
        />
      ))}
    </View>
  );
}

UserList.propTypes = {
  userMap: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    push: PropTypes.func.isRequired,
  }).isRequired,
};
