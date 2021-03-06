/* eslint-disable react/prop-types */
import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#8E8E93',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: 16,
    paddingLeft: 16,
    borderRadius: 5,
  },
  caption: {
    color: '#fff',
    fontSize: 17,
    // fontFamily: "roboto-500"
  },
});

function CupertinoButtonGrey(props) {
  const { style, text1 } = props;

  return (
    <TouchableOpacity style={[styles.container, style]}>
      <Text
        style={styles.caption}
        // eslint-disable-next-line no-console
        onPress={() => console.log('LOGIN BUTTON PRESSED')}
      >
        {text1 || 'Button'}

      </Text>
    </TouchableOpacity>
  );
}

export default CupertinoButtonGrey;
