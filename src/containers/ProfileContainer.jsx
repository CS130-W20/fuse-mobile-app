import React, { PureComponent } from 'react';
import {
  Text,
  View,
  ScrollView,
} from 'react-native';

import ProfileHeader from '../components/ProfileHeader';
import NewFuseButton from '../components/NewFuseButton';
import ViewToggle from '../components/ViewToggle';
import Spacer from '../helpers/Spacer';


import styles from './styles/ProfileContainerStyles';


const bio = 'Searching for my wife.\nI am accepting snakes and champagne stealers only.\nWill you accept this rose?';

export default class ProfileContainer extends PureComponent {
  render() {
    return (
      <View style={styles.wrapper}>
        <ScrollView style={styles.scrollView}>
          <ProfileHeader
            name="Peter Weber"
            bio={bio}
            score={6969}
            friendCount={30}
            completedEventCount={69}
          />
          <Spacer padding={20} />
          <ViewToggle
            view1={<Text>View1</Text>}
            view2={<Text>View2</Text>}
            view3={<Text>View3</Text>}
          />
        </ScrollView>
        <NewFuseButton />
      </View>
    );
  }
}
