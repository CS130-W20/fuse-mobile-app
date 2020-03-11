import React, { PureComponent } from 'react';
import {
  TouchableOpacity,
  Text,
} from 'react-native';

import { PropTypes } from 'prop-types';
import styles from './styles/FuseTileButtonStyles';

export default class FuseTileButton extends PureComponent {
  render() {
    const {
      buttonName,
    } = this.props;

    return (
      <TouchableOpacity style={styles.buttonWrapper}>
        <Text style={styles.buttonText}>{buttonName}</Text>
      </TouchableOpacity>
    );
  }
}

FuseTileButton.propTypes = {
  buttonName: PropTypes.string.isRequired,
};
