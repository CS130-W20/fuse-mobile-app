import React, { PureComponent } from 'react';
import {
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
  constructor(props) {
    super(props);

    this.state = {
      focusedView: 0,
    };
  }

  viewToggler(selectedViewNum) {
    this.setState({ focusedView: selectedViewNum });
  }

  showToggledView() {
    const { focusedView } = this.state;

    switch (focusedView) {
      case 0: {
        break;
      }
      case 1: {
        break;
      }
      case 2: {
        break;
      }
      default: {
        break;
      }
    }
  }

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
            viewToggler={(viewFocused) => this.viewToggler(viewFocused)}
          />
        </ScrollView>
        <NewFuseButton />
      </View>
    );
  }
}
