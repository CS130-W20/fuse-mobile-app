import React, { PureComponent } from 'react';
import {
  TouchableOpacity,
  Text,
} from 'react-native';

import { PropTypes } from 'prop-types';
import styles from './styles/FuseTileButtonStyles';
import screenIds from '../navigation/ScreenIds';

export default class FuseTileButton extends PureComponent {
  changeScreen() {
    const { navigation } = this.props;
    navigation.navigate(screenIds.newFuse);
  }

  render() {
    const {
      buttonName,
      navigation,
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
