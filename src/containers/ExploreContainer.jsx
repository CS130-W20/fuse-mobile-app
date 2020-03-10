import React, { useState, useEffect } from 'react';
import {
  View,
  ScrollView,
} from 'react-native';
import PropTypes from 'prop-types';

import { useQuery } from '@apollo/react-hooks';
import SearchBar from '../components/SearchBar';
import FriendTile from '../components/FriendTile';
import {
  FRIEND_SEARCH,
} from '../graphql/GeneralQueries';

export default function ExploreContainer({ navigation }) {
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
            navigation={navigation}
            key={user.id}
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
    <View testID="exploreScreen">
      <SearchBar onChangeText={friendTilesToRender} testID="exploreSearchBar" />
      <ScrollView testID="friendTiles">
        {friendTiles}
      </ScrollView>
    </View>
  );
}

ExploreContainer.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    goBack: PropTypes.func.isRequired,
  }).isRequired,
};
