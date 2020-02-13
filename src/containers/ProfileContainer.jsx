import React, { PureComponent } from 'react';
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
} from 'react-native';
import ProfileHeader from './ProfileHeader';

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
          <ProfileHeader name="Peter" />
          <Text>Profile contents</Text>
        </ScrollView>
      </View>
    );
  }
}
