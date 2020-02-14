import React, { PureComponent } from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
} from 'react-native';
import ProfileHeader from '../components/ProfileHeader';

const styles = StyleSheet.create({
  scrollView: {
    paddingTop: 20,
    paddingLeft: 10,
    paddingRight: 10,
    flex: 1,
  },
  scrollViewWrapper: {
    flex: 1,
    marginTop: 50,
    padding: 0,
  },
});

export default class ProfileContainer extends PureComponent {
  render() {
    return (
      <View style={styles.scrollViewWrapper}>
        <ScrollView style={styles.scrollView}>
          <ProfileHeader
            name="Chiara Mooney"
            // bio="UCLA Engineering '20 || ck . . Campus Tours ."
            bio="Hello I am a really long biography because I want to test out how this looks if I continue to type and type and type and"
            friendCount={833}
            completedEventCount={13}
          />
        </ScrollView>
      </View>
    );
  }
}
