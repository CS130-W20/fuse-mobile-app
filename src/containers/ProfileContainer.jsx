import React, { useState } from 'react';
import {
  Text,
  View,
  ScrollView,
} from 'react-native';
import PropTypes from 'prop-types';

import ProfileHeader from '../components/ProfileHeader';
import NewFuseButton from '../components/NewFuseButton';
import ViewToggle from '../components/ViewToggle';
import Spacer from '../helpers/Spacer';

import styles from './styles/ProfileContainerStyles';

const bio = 'Searching for my wife.\nI am accepting snakes and champagne stealers only.\nWill you accept this rose?';

export default function ProfileContainer({ navigation }) {
  const [focusedView, setFocusedView] = useState(0);

  // eslint-disable-next-line class-methods-use-this
  const getSetFusesView = () => {
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
  };

  // eslint-disable-next-line class-methods-use-this
  const getLitFusesView = () => {
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
  };

  // eslint-disable-next-line class-methods-use-this
  const getCompletedFusesView = () => {
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
  };

  const showToggledView = () => {
    switch (focusedView) {
      case 0: {
        return getSetFusesView();
      }
      case 1: {
        return getLitFusesView();
      }
      case 2: {
        return getCompletedFusesView();
      }
      default: {
        return (<View />);
      }
    }
  };

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
          viewToggler={setFocusedView}
        />
        <Spacer padding={5} />
        {showToggledView()}
      </ScrollView>
      <NewFuseButton navigation={navigation} />
    </View>
  );
}

ProfileContainer.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    goBack: PropTypes.func.isRequired,
  }).isRequired,
};
