import React from 'react';
import { View, TouchableOpacity, TextInput } from 'react-native';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

import styles from './styles/SearchBarStyles';

function SearchBar() {
  return (
    <View style={[styles.container]}>
      <View style={styles.rect1}>
        <View style={styles.leftIconButtonRow}>
          <View style={styles.leftIconButton}>
            <MaterialIcons name="search" size={30} color="grey" />
          </View>
          <TextInput placeholder="Search" keyboardAppearance="light" style={styles.inputStyle} />
        </View>
        <View style={styles.leftIconButtonRowFiller} />
        <TouchableOpacity style={styles.rightIconButton}>
          <MaterialCommunityIcons name="close" size={30} color="grey" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default SearchBar;
