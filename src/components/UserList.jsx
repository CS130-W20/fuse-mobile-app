import React from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import { PropTypes } from 'prop-types';

import FriendTile from './FriendTile';

const styles = StyleSheet.create({
  container: {
    padding: 5,
    // borderWidth: 2,
    // borderColor: 'black',
    borderRadius: 10,
    backgroundColor: 'white',
  },
});

export default function UserList({ users, navigation }) {
  if (users.length === 0) {
    return (
      <View style={styles.container}>
        <FriendTile
          userName=""
          userId=""
          navigation={navigation}
        />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {users.map((user) => (
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
  users: PropTypes.arrayOf(
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
