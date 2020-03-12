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
  buttonWrapperAccentStyle: {
    backgroundColor: colors.accentred,
  },
  buttonTextAccentStyle: {
    color: colors.white,
  },
});

export default class FuseSubmitButton extends PureComponent {
  render() {
    const {
      buttonName,
      onPress,
      accented,
    } = this.props;

    let accentWrapperStyles = {};
    let accentTextStyles = {};

    if (accented) {
      accentWrapperStyles = styles.buttonWrapperAccentStyle;
      accentTextStyles = styles.buttonTextAccentStyle;
    }

    return (
      <TouchableOpacity
        style={[styles.buttonWrapper, accentWrapperStyles]}
        onPress={() => onPress()}
      >
        <Text style={[styles.buttonText, accentTextStyles]}>{buttonName}</Text>
      </TouchableOpacity>
    );
  }
}

FuseSubmitButton.defaultProps = {
  accented: false,
};

FuseSubmitButton.propTypes = {
  onPress: PropTypes.func.isRequired,
  buttonName: PropTypes.string.isRequired,
  accented: PropTypes.bool,
};
