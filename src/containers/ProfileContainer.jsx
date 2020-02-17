import React, { PureComponent } from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
} from 'react-native';
import ProfileHeader from '../components/ProfileHeader';

const styles = StyleSheet.create({
  scrollView: {
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    flex: 1,
  },
  scrollViewWrapper: {
    flex: 1,
  },
});

const bio = 'Searching for my wife.\nI am accepting snakes and champagne stealers only.\nWill you accept this rose?';

export default class ProfileContainer extends PureComponent {
  render() {
    return (
      <View style={styles.scrollViewWrapper}>
        <ScrollView style={styles.scrollView}>
          <ProfileHeader
            name="Peter Weber"
            bio={bio}
            score={6969}
            friendCount={30}
            completedEventCount={69}
          />
        </ScrollView>
      </View>
    );
  }
}
