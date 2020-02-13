import React, { PureComponent } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { PropTypes } from 'prop-types';

const styles = StyleSheet.create({
  nameWrapper: {
    flex: 3,
    backgroundColor: 'powderblue',
  },
  profilePicWrapper: {
    flex: 2,
    backgroundColor: 'skyblue',
  },
  wrapper: {
    display: 'flex',
    height: 200,
    flexDirection: 'row',
  },
});

export default class ProfileHeader extends PureComponent {
  render() {
    const { name } = this.props;
    return (
      <View style={styles.wrapper}>
        <View style={styles.profilePicWrapper}>
          <Text>Picture</Text>
        </View>
        <View style={styles.nameWrapper}>
          <Text>{name}</Text>
        </View>
      </View>
    );
  }
}


ProfileHeader.propTypes = {
  name: PropTypes.string.isRequired,
};
