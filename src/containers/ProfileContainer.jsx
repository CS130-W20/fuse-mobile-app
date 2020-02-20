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
  constructor(props) {
    super(props);

    this.state = {
      focusedView: 0,
    };
  }

  // eslint-disable-next-line class-methods-use-this
  getSetFusesView() {
    const mockEventTiles = [];
    const numMockEventTiles = 10;
    for (let i = 0; i < numMockEventTiles; i += 1) {
      mockEventTiles.push(
        <View style={styles.dummyView}>
          <Text>
            Set fuse
            {i}
          </Text>
        </View>,
      );
    }

    return mockEventTiles;
  }

  // eslint-disable-next-line class-methods-use-this
  getLitFusesView() {
    const mockEventTiles = [];
    const numMockEventTiles = 10;
    for (let i = 0; i < numMockEventTiles; i += 1) {
      mockEventTiles.push(
        <View style={styles.dummyView}>
          <Text>
            Lit fuse
            {i}
          </Text>
        </View>,
      );
    }

    return mockEventTiles;
  }

  // eslint-disable-next-line class-methods-use-this
  getCompletedFusesView() {
    const mockEventTiles = [];
    const numMockEventTiles = 10;
    for (let i = 0; i < numMockEventTiles; i += 1) {
      mockEventTiles.push(
        <View style={styles.dummyView}>
          <Text>
            Completed fuse
            {i}
          </Text>
        </View>,
      );
    }

    return mockEventTiles;
  }

  viewToggler(selectedViewNum) {
    this.setState({ focusedView: selectedViewNum });
  }

  showToggledView() {
    const { focusedView } = this.state;

    switch (focusedView) {
      case 0: {
        return this.getSetFusesView();
      }
      case 1: {
        return this.getLitFusesView();
      }
      case 2: {
        return this.getCompletedFusesView();
      }
      default: {
        return (<View />);
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
          <Spacer padding={5} />
          {this.showToggledView()}
        </ScrollView>
        <NewFuseButton />
      </View>
    );
  }
}
