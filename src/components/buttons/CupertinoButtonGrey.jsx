import React from 'react';
import {
  StyleSheet, TouchableOpacity, Text, ViewPropTypes,
} from 'react-native';
import PropTypes from 'prop-types';

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

function CupertinoButtonGrey({ style, text, onPress }) {
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
      <Text style={styles.caption}>{text}</Text>
    </TouchableOpacity>
  );
}

CupertinoButtonGrey.defaultProps = {
  style: styles,
  text: 'button',
  // eslint-disable-next-line no-console
  onPress: () => { console.log('button pressed'); },
};

CupertinoButtonGrey.propTypes = {
  style: ViewPropTypes.style,
  text: PropTypes.string,
  onPress: PropTypes.func,
};


export default CupertinoButtonGrey;
