import React from 'react';
import { View } from 'react-native';
import colors from '../styles/colors';

export default function Divider() {
  return (
    <View
      style={{
        borderBottomColor: colors.lightgrey,
        borderBottomWidth: 1,
      }}
    />
  );
}
