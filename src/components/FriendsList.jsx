/* eslint-disable no-use-before-define */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
} from 'react-native';
import { useQuery } from '@apollo/react-hooks';

import UserList from './UserList';
import { GET_FRIENDS } from '../graphql/GeneralQueries';

export const friendsListHeaderOptions = {
  headerShown: true,
  headerTitle: 'Friends',
  headerBackTitle: ' ',
};

export default function FriendsList({ route, navigation }) {
  const { userId } = route.params;

  const [friends, setFriends] = useState([]);

  const {
    data: friendsQueryData,
    loading: friendsQueryLoading,
    refetch: refetchFriendsQuery,
  } = useQuery(GET_FRIENDS,
    {
      variables: {
        userId,
      },
    });

  useEffect(() => {
    refetchFriendsQuery();
  }, []);

  useEffect(() => {
    if (friendsQueryData && !friendsQueryLoading) {
      // eslint-disable-next-line no-console
      console.log(friendsQueryData);

      const parsedFriends = friendsQueryData.user.friends.map((friend) => ({
        id: friend.friend.id,
        name: friend.friend.name,
      }));

      setFriends(parsedFriends);
    }
  }, [
    friendsQueryData, friendsQueryLoading,
  ]);

  if (!friendsQueryData) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <UserList
        users={friends}
        navigation={navigation}
      />
    </ScrollView>
  );
}

FriendsList.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({
      userId: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    push: PropTypes.func.isRequired,
  }).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  boldText: {
    fontWeight: '700',
  },
});
