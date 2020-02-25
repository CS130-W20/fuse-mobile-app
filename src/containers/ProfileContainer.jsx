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
import { mockAsyncWithData } from '../helpers/mock';

import styles from './styles/ProfileContainerStyles';

const bio = 'Searching for my wife.\nI am accepting snakes and champagne stealers only.\nWill you accept this rose?';

export default function ProfileContainer({ navigation }) {
  const [focusedView, setFocusedView] = useState(0);

  // TODO prop type should be user ID so that we can load the user here. An
  // argument is to be made to just pass the container all the information it
  // needs? And have the parent fetch the information? Probably not... I think
  // this is self contained enough
  const [profileData, setProfileData] = useState({
    name: '',
    bio: '',
    score: 0,
    friendCount: 0,
    completedEventCount: 0,
  });

  const profileDataQueryParser = (queryResponse) => (
    {
      name: queryResponse.name,
      bio: queryResponse.bio,
      score: queryResponse.score,
      friendCount: queryResponse.friendCount,
      completedEventCount: queryResponse.completedEventCount,
    }
  );

  // eslint-disable-next-line no-unused-vars
  const getProfileData = async (profileId) => {
    // make mock async call to get data associated with profile
    const mockedProfileData = {
      name: 'Peter Weber',
      bio,
      score: 420,
      friendCount: 3,
      completedEventCount: 69,
    };
    const data = await mockAsyncWithData(mockedProfileData, 3000);

    setProfileData(profileDataQueryParser(data));
  };

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

  getProfileData('');

  return (
    <View style={styles.wrapper}>
      <ScrollView style={styles.scrollView}>
        <ProfileHeader
          name={profileData.name}
          bio={profileData.bio}
          score={profileData.score}
          friendCount={profileData.friendCount}
          completedEventCount={profileData.completedEventCount}
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
