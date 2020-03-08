import React, { useState } from 'react';
import { View, TextInput } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import styles from './styles/SearchBarStyles';

function SearchBar() {
  // eslint-disable-next-line no-unused-vars
  const [searchText, setText] = useState(null);
  return (
    <View style={[styles.container]}>
      <View style={styles.rect1}>
        <View style={styles.leftIconButtonRow}>
          <View style={styles.leftIconButton}>
            <MaterialIcons name="search" size={30} color="grey" />
          </View>
          <TextInput placeholder="Search" keyboardAppearance="light" style={styles.inputStyle} onChangeText={(text) => { setText(text); }} clearButtonMode={3} />
        </View>
      </View>
    </View>
  );
}

export default SearchBar;
