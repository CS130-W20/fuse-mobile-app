import React, { useState, useEffect } from 'react';
import {
  View,
  ScrollView,
} from 'react-native';

import { useQuery } from '@apollo/react-hooks';
import SearchBar from '../components/SearchBar';
import FriendTile from '../components/FriendTile';
import {
  FRIEND_SEARCH,
} from '../graphql/GeneralQueries';

export default function ExploreContainer() {
  const [searchText, setSearchText] = useState('');
  const [friendTiles, setFriendTiles] = useState(<View />);
  const {
    data: friendSearchQueryData,
    loading: friendSearchQueryLoading,
    // eslint-disable-next-line no-unused-vars
  } = useQuery(FRIEND_SEARCH, {
    variables: {
      prefix: searchText,
    },
    skip: searchText === '',
  });
  useEffect(() => {
    if (friendSearchQueryData && !friendSearchQueryLoading) {
      // console.log(friendSearchQueryData);
      if (searchText !== '') {
        setFriendTiles(friendSearchQueryData.users.map((user) => (
          <FriendTile
            userName={user.name}
            userId={user.id}
          />
        )));
      }
    }
  }, [friendSearchQueryData]);
  const friendTilesToRender = (text) => {
    setSearchText(text);
    if (text === '') {
      setFriendTiles(<View />);
    }
  };

  return (
    <View>
      <SearchBar onChangeText={friendTilesToRender} />
      <ScrollView>
        {friendTiles}
      </ScrollView>
    </View>
  );
}

ExploreContainer.propTypes = {
};
