import React, { PureComponent } from 'react';
import {
  TouchableOpacity,
  Text,
} from 'react-native';

import { PropTypes } from 'prop-types';
import styles from './styles/FuseTileButtonStyles';

export default class FuseTileButton extends PureComponent {
  changeScreen() {
    const { navigation } = this.props;
    const { screenId } = this.props;
    switch (screenId) {
      case 'NewFuse':
      case 'LightFuse':
      case 'SizzleFuse':
        navigation.navigate(screenId);
        break;
      default:
        break;
    }
  }

  render() {
    const {
      buttonName,
      // eslint-disable-next-line no-unused-vars
      navigation,
      // eslint-disable-next-line no-unused-vars
      screenId,
    } = this.props;
    return (
      <TouchableOpacity
        style={styles.buttonWrapper}
        onPress={() => this.changeScreen()}
      >
        <Text style={styles.buttonText}>{buttonName}</Text>
      </TouchableOpacity>
    );
  }
}

FuseTileButton.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  screenId: PropTypes.string.isRequired,
  buttonName: PropTypes.string.isRequired,
};
