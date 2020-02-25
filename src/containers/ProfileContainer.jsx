import React, { useState, useEffect } from 'react';
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
import EventTile from '../components/EventTile';

const bio = 'Searching for my wife.\nI am accepting snakes and champagne stealers only.\nWill you accept this rose?';

export default function ProfileContainer({ navigation }) {
  const [focusedView, setFocusedView] = useState(0);
  const [profileData, setProfileData] = useState({
    name: '',
    bio: '',
    score: 0,
    friendCount: 0,
    completedEventCount: 0,
  });
  const [profileFuses, setProfileFuses] = useState({
    set: [],
    lit: [],
    completed: [],
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

  const fuseQueryParser = (queryResponse) => (
    queryResponse.map((fuse) => (
      {
        name: fuse.name,
        owner: fuse.owner,
        description: fuse.description,
        state: fuse.state,
      }
    ))
  );

  // eslint-disable-next-line no-unused-vars
  const getProfileData = async (profileId) => {
    // TODO replace mock call with real query
    const mockedProfileData = {
      name: 'Peter Weber',
      bio,
      score: 420,
      friendCount: 3,
      completedEventCount: 69,
    };
    const data = await mockAsyncWithData(mockedProfileData, 1000);

    setProfileData(profileDataQueryParser(data));
  };

  // eslint-disable-next-line no-unused-vars
  const getProfileFuses = async (profileId) => {
    // TODO replace mock call with real query
    const mockedProfileFuses = [
      {
        name: 'Party with Peter',
        owner: 'Peter',
        description: 'A party!',
        state: 1,
      },
      {
        name: 'Lit Party with Peter',
        owner: 'Peter',
        description: 'A lit party!',
        state: 0,
      },
      {
        name: 'Plane flight',
        owner: 'Peter',
        description: 'Zoom zoom',
        state: 2,
      },
    ];
    const fuseData = await mockAsyncWithData(mockedProfileFuses, 1000);
    const parsedFuseData = fuseQueryParser(fuseData);

    const setFuses = [];
    const litFuses = [];
    const completedFuses = [];

    parsedFuseData.forEach((fuse) => {
      switch (fuse.state) {
        case 0:
          litFuses.push(fuse);
          break;
        case 1: {
          setFuses.push(fuse);
          break;
        }
        case 2: {
          completedFuses.push(fuse);
          break;
        }
        default:
          break;
      }
    });

    setProfileFuses({
      set: setFuses,
      lit: litFuses,
      completed: completedFuses,
    });
  };

  const showToggledView = () => {
    let fuseListToShow;

    switch (focusedView) {
      case 0:
        fuseListToShow = profileFuses.set;
        break;
      case 1:
        fuseListToShow = profileFuses.lit;
        break;
      case 2:
        fuseListToShow = profileFuses.completed;
        break;
      default:
    }

    if (fuseListToShow.length === 0) {
      // TODO replace with text
      return (
        <Text>No fuses</Text>
      );
    }

    return fuseListToShow.map((fuse) => (
      <EventTile
        eventName={fuse.name}
        eventCreator={fuse.owner}
        description={fuse.description}
        eventStage={fuse.state}
        eventView={0}
        eventRelation={0}
        key={fuse.name}
      />
    ));
  };

  useEffect(() => {
    getProfileData('');
    getProfileFuses('');
  }, []);

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
