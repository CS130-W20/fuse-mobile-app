import React from 'react';
import {
  StyleSheet, View, TextInput, ViewPropTypes,
} from 'react-native';
import PropTypes from 'prop-types';

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

function MaterialUnderlineTextbox({
  style, placeholder, onChangeText, secureTextEntry, textContentType,
}) {
  return (
    <View style={[styles.container, style]}>
      <TextInput
        placeholder={placeholder}
        style={styles.inputStyle}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        textContentType={textContentType}
      />
    </View>
  );
}


MaterialUnderlineTextbox.defaultProps = {
  style: styles,
  placeholder: 'Placeholder',
  // eslint-disable-next-line no-console
  onChangeText: () => { console.log('text changed'); },
  secureTextEntry: false,
  textContentType: 'none',
};

MaterialUnderlineTextbox.propTypes = {
  style: ViewPropTypes.style,
  placeholder: PropTypes.string,
  onChangeText: PropTypes.func,
  secureTextEntry: PropTypes.bool,
  textContentType: PropTypes.string,
};


export default MaterialUnderlineTextbox;
