import React, { PureComponent } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import styles from './styles/ViewToggleStyles';

export default class ViewToggle extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      focusedView: 0,
    };
  }

  onPressSelector(viewSelected) {
    this.setState({ focusedView: viewSelected });
  }

  render() {
    const { focusedView } = this.state;

    return (
      <View style={styles.wrapper}>
        <View style={styles.selectorWrapper}>
          <TouchableOpacity
            style={
              focusedView === 0
                ? styles.focusedViewSelector
                : styles.unfocusedViewSelector
            }
            onPress={() => this.onPressSelector(0)}
          >
            <Text style={styles.selectorText}>SET</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={
              focusedView === 1
                ? styles.focusedViewSelector
                : styles.unfocusedViewSelector
            }
            onPress={() => this.onPressSelector(1)}
          >
            <Text style={styles.selectorText}>LIT</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={
              focusedView === 2
                ? styles.focusedViewSelector
                : styles.unfocusedViewSelector
            }
            onPress={() => this.onPressSelector(2)}
          >
            <Text style={styles.selectorText}>COMPLETED</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
