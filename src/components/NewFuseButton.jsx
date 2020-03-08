import React from 'react';
import {
  TouchableOpacity,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import PropTypes from 'prop-types';

import styles from './styles/NewFuseButtonStyles';
import screenIds from '../navigation/ScreenIds';

export default function NewFuseButton({ navigation, testID }) {
  return (
    <TouchableOpacity
      style={styles.newFuseWrapper}
      onPress={() => navigation.navigate(screenIds.newFuse)}
      testID={testID}
    >
      <Feather name="plus" style={styles.newFuseIcon} />
    </TouchableOpacity>
  );
}

NewFuseButton.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  testID: PropTypes.string.isRequired,
};
