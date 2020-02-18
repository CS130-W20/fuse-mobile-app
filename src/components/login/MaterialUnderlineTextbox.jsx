/* eslint-disable react/prop-types */
import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#D9D5DC',
    borderBottomWidth: 1,
  },
  inputStyle: {
    flex: 1,
    color: '#000',
    alignSelf: 'stretch',
    paddingTop: 16,
    paddingRight: 5,
    paddingBottom: 8,
    fontSize: 15,
    // fontFamily: "roboto-regular",
    lineHeight: 16,
  },
});

function MaterialUnderlineTextbox(props) {
  const { style, textInput1 } = props;

  return (
    <View style={[styles.container, style]}>
      <TextInput
        placeholder={textInput1 || 'Placeholder'}
        style={styles.inputStyle}
      />
    </View>
  );
}

export default MaterialUnderlineTextbox;
