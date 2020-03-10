import React, { PureComponent } from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';

import { PropTypes } from 'prop-types';
import screenIds from '../navigation/ScreenIds';
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
  changeScreen() {
    const { navigation } = this.props;
    navigation.navigate(screenIds.NewsFeed);
  }

  render() {
    const {
      buttonName,
      // eslint-disable-next-line no-unused-vars
      navigation,
      // eslint-disable-next-line no-unused-vars
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

FuseSubmitButton.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  buttonName: PropTypes.string.isRequired,
};
