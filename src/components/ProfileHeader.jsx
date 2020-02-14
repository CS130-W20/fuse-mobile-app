import React, { PureComponent } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native';
import { PropTypes } from 'prop-types';
import Spacer from '../helpers/Spacer';

const styles = StyleSheet.create({
  bio: {
    textAlign: 'right',
  },
  bioWrapper: {
    // backgroundColor: 'lightcoral',
  },
  friendsAndEvents: {
    textAlign: 'right',
    fontWeight: '700',
  },
  friendsAndEventsWrapper: {
    // backgroundColor: 'lightpink',
  },
  lowerHeader: {
    height: 25,
    justifyContent: 'center',
    paddingRight: 5,
    paddingLeft: 5,
  },
  name: {
    fontSize: 30,
    fontWeight: '700',
    textAlign: 'center',
  },
  nameWrapper: {
    // backgroundColor: 'lightsalmon',
  },
  profilePicColumn: {
    // backgroundColor: 'skyblue',
    flex: 2,
    padding: 5,
    paddingTop: 30,
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
  textColumn: {
    // backgroundColor: 'powderblue',
    flex: 3,
    padding: 5,
    paddingTop: 30,
  },
  upperHeader: {
    // backgroundColor: 'lightgrey',
    display: 'flex',
    height: 175,
    flexDirection: 'row',
  },
  wrapper: {
    // backgroundColor: 'honeydew',
    display: 'flex',
    height: 200,
  },
});

const sampleImage = require('../assets/peter.png');

export default class ProfileHeader extends PureComponent {
  render() {
    const {
      name,
      bio,
      friendCount,
      completedEventCount,
    } = this.props;
    const friendAndEventsText = `${completedEventCount} Completed Events\t${friendCount} Friends`;

    return (
      <View style={styles.wrapper}>
        <View style={styles.upperHeader}>
          <View style={styles.profilePicColumn}>
            <View style={styles.profilePicWrapper}>
              <Image source={sampleImage} style={styles.profileImage} />
            </View>
          </View>
          <View style={styles.textColumn}>
            <View style={styles.nameWrapper}>
              <Text numberOfLines={1} adjustsFontSizeToFit style={styles.name}>{name}</Text>
            </View>
            <Spacer padding={10} />
            <View style={styles.bioWrapper}>
              <Text style={styles.bio}>{bio}</Text>
            </View>
          </View>
        </View>
        <View style={styles.lowerHeader}>
          <View style={styles.friendsAndEventsWrapper}>
            <Text style={styles.friendsAndEvents}>{friendAndEventsText}</Text>
          </View>
        </View>
      </View>
    );
  }
}


ProfileHeader.propTypes = {
  name: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  friendCount: PropTypes.number.isRequired,
  completedEventCount: PropTypes.number.isRequired,
};
