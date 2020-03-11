/* eslint-disable no-use-before-define */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { useQuery } from '@apollo/react-hooks';

import { GET_FRIENDS } from '../../graphql/GeneralQueries';

export const friendsListHeaderOptions = {
  headerShown: true,
  headerTitle: 'Friends',
  headerBackTitle: ' ',
};

export default function FriendsListTest({ route }) {
  const { userId } = route.params;
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
    <View style={styles.container}>
      <Text>
        <Text style={styles.boldText}>ID: </Text>
        {userId}
      </Text>
      {friendsQueryData.user.friends.map((friend) => (
        <Text key={friend.friend.id}>
          {friend.friend.name}
        </Text>
      ))}
    </View>
  );
}

FriendsListTest.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({
      userId: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  boldText: {
    fontWeight: '700',
  },
});
