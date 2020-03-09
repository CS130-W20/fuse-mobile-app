import React from 'react';
import {
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';

import { Feather } from '@expo/vector-icons';
import styles from './styles/SettingsHeaderButtonStyles';

import screenIds from '../navigation/ScreenIds';

export default function SettingsHeaderButton({ navigation, testID }) {
  return (
    <TouchableOpacity
      style={styles.buttonWrapper}
      onPress={() => navigation.navigate(screenIds.settings)}
      testID={testID}
    >
      <Feather name="settings" size={25} />
    </TouchableOpacity>
  );
}

SettingsHeaderButton.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    goBack: PropTypes.func.isRequired,
  }).isRequired,
  testID: PropTypes.string.isRequired,
};
