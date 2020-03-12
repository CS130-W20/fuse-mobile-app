import React, { PureComponent } from 'react';
import {
  TouchableOpacity,
  Text,
} from 'react-native';

import { PropTypes } from 'prop-types';
import screenIds from '../navigation/ScreenIds';
import styles from './styles/FuseTileButtonStyles';

export default class FuseTileButton extends PureComponent {
  changeScreen() {
    const { navigation, screenId, eventId } = this.props;
    switch (screenId) {
      case 'NewFuse':
      case 'LightFuse':
        navigation.push(screenIds.eventDetails, {
          eventId,
        });
        break;
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
  eventId: PropTypes.string.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    push: PropTypes.func.isRequired,
  }).isRequired,
  screenId: PropTypes.string.isRequired,
  buttonName: PropTypes.string.isRequired,
};
