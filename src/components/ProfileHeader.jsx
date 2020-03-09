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
      score,
      friendCount,
      completedEventCount,
      testID,
    } = this.props;

    // TODO: write a helper function to convert scores/counts to a renderable version
    // e.g. 1,100,000 -> 1.1m
    const friendCountText = friendCount;
    const completedEventCountText = completedEventCount;
    const scoreText = score;

    return (
      <View style={styles.wrapper}>
        <View style={styles.upperHeader}>
          <View style={styles.profilePicColumn}>
            <View style={styles.profilePicWrapper}>
              <Image source={sampleImage} style={styles.profileImage} />
              <View style={styles.scoreWrapper}>
                <View style={styles.scoreEllipse}>
                  <Text style={styles.scoreText}>{scoreText}</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.textColumn}>
            <View style={styles.nameWrapper}>
              <Text
                numberOfLines={1}
                adjustsFontSizeToFit
                style={styles.name}
                testID={testID}
              >
                {name}
              </Text>
            </View>
            <Spacer padding={10} />
            <View style={styles.bioWrapper}>
              <Text style={styles.bio}>{bio}</Text>
            </View>
          </View>
        </View>
        <View style={styles.lowerHeader}>
          <View style={styles.friendsAndEventsWrapper}>
            <Text style={styles.friendsAndEventsLabels}>
              <Text style={styles.friendsAndEventsBold}>{completedEventCountText}</Text>
              {' Completed Events\t'}
              <Text style={styles.friendsAndEventsBold}>{friendCountText}</Text>
              {' Friends'}
            </Text>
            {/* <Text style={styles.friendsAndEvents}>{friendAndEventsText}</Text> */}
          </View>
        </View>
      </View>
    );
  }
}

ProfileHeader.propTypes = {
  name: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  friendCount: PropTypes.number.isRequired,
  completedEventCount: PropTypes.number.isRequired,
  testID: PropTypes.string.isRequired,
};
