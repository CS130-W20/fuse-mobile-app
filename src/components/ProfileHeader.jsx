import React, { PureComponent } from 'react';
import {
  View,
  Text,
  Image,
} from 'react-native';
import { PropTypes } from 'prop-types';
import Spacer from '../helpers/Spacer';
import styles from './styles/ProfileHeaderStyles';

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
