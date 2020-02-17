import React, { PureComponent } from 'react';
import {
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import { Feather } from '@expo/vector-icons';

import ProfileHeader from '../components/ProfileHeader';

import styles from './styles/ProfileContainerStyles';


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
        <TouchableOpacity style={styles.newFuseWrapper}>
          <Feather name="plus" style={styles.newFuseIcon} />
        </TouchableOpacity>
      </View>
    );
  }
}
