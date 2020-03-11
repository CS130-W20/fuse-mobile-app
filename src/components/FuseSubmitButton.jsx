import React, { PureComponent } from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';

import { PropTypes } from 'prop-types';
import colors from '../styles/colors';

const styles = StyleSheet.create({
  buttonText: {
    color: colors.grey,
    fontSize: 20,
  },
  buttonWrapper: {
    height: 50,
    width: 250,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
  },
});

export default class FuseSubmitButton extends PureComponent {
  render() {
    const {
      buttonName,
      onPress,
    } = this.props;
    return (
      <TouchableOpacity
        style={styles.buttonWrapper}
        onPress={() => onPress()}
      >
        <Text style={styles.buttonText}>{buttonName}</Text>
      </TouchableOpacity>
    );
  }
}

FuseSubmitButton.propTypes = {
  onPress: PropTypes.func.isRequired,
  buttonName: PropTypes.string.isRequired,
};
