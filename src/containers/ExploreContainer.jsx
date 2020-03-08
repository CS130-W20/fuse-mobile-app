import React from 'react';
import {
  View,
  ScrollView,
} from 'react-native';

import SearchBar from '../components/SearchBar';
import FriendTile from '../components/FriendTile';

export default function ExploreContainer() {
  return (
    <View>
      <SearchBar />
      <ScrollView>
        <FriendTile userName="chiara.mooney" />
        <FriendTile userName="chiara.mooney" />
        <FriendTile userName="chiara.mooney" />
        <FriendTile userName="chiara.mooney" />
        <FriendTile userName="chiara.mooney" />
      </ScrollView>
    </View>
  );
}

ExploreContainer.propTypes = {
};
