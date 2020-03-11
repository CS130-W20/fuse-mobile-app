import React, { PureComponent } from 'react';
import {
  TouchableOpacity,
} from 'react-native';
import { Feather } from '@expo/vector-icons';

import styles from './styles/NewFuseButtonStyles';

export default class NewFuseButton extends PureComponent {
  render() {
    return (
      <TouchableOpacity style={styles.newFuseWrapper}>
        <Feather name="plus" style={styles.newFuseIcon} />
      </TouchableOpacity>
    );
  }
}
