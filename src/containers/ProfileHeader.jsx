import React, { PureComponent } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native';
import { PropTypes } from 'prop-types';

const styles = StyleSheet.create({
  bio: {
    textAlign: 'center',
  },
  headerTextWrapper: {
    // backgroundColor: 'powderblue',
    flex: 3,
    padding: 5,
    paddingTop: 20,
  },
  name: {
    fontSize: 30,
    textAlign: 'center',
    paddingBottom: 20,
  },
  profilePicColumn: {
    // backgroundColor: 'skyblue',
    flex: 2,
    padding: 5,
    paddingTop: 20,
  },
  profileImage: {
    // backgroundColor: 'grey',
    flex: 1,
    width: '100%',
    resizeMode: 'contain',
  },
  // container for where the image will go
  profilePicWrapper: {
    // backgroundColor: 'orange',
    width: '100%',
    aspectRatio: 1,
  },
  wrapper: {
    backgroundColor: 'lightgrey',
    display: 'flex',
    height: 200,
    flexDirection: 'row',
  },
});

const sampleImage = require('../assets/peter.png');

export default class ProfileHeader extends PureComponent {
  render() {
    const { name } = this.props;
    return (
      <View style={styles.wrapper}>
        <View style={styles.profilePicColumn}>
          <View style={styles.profilePicWrapper}>
            <Image source={sampleImage} style={styles.profileImage} />
          </View>
        </View>
        <View style={styles.headerTextWrapper}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.bio}>
            This is a sample bio. Look at me I am so
            awesome. Please wrap this text
          </Text>
        </View>
      </View>
    );
  }
}


ProfileHeader.propTypes = {
  name: PropTypes.string.isRequired,
};
