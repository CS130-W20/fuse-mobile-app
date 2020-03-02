import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  ScrollView,
} from 'react-native';
import PropTypes from 'prop-types';
import { useQuery } from '@apollo/react-hooks';

import ProfileHeader from '../components/ProfileHeader';
import NewFuseButton from '../components/NewFuseButton';
import ViewToggle from '../components/ViewToggle';
import Spacer from '../helpers/Spacer';
import { mockAsyncWithData } from '../helpers/mock';
import { USER_EVENTS_QUERY } from '../graphql/GeneralQueries';

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

  // TODO handle error
  const {
    data: eventQueryData,
    loading: eventQueryLoading,
  } = useQuery(USER_EVENTS_QUERY);

  const profileDataQueryParser = (queryResponse) => (
    {
      name: queryResponse.name,
      bio: queryResponse.bio,
      score: queryResponse.score,
      friendCount: queryResponse.friendCount,
      completedEventCount: queryResponse.completedEventCount,
    }
  );
  const fuseQueryParser = (queryResponse) => {
    const { events } = queryResponse.user;

    return events.map((fuse) => (
      {
        name: fuse.title,
        owner: fuse.owner.name,
        description: fuse.description,
        state: fuse.status,
      }
    ));
  };

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
    const mockData = await mockAsyncWithData(mockedProfileData, 1000);

    setProfileData(profileDataQueryParser(mockData));
  };

  // eslint-disable-next-line no-unused-vars
  const getProfileFuses = async (profileId) => {
    // const mockedProfileFuses = [
    //   {
    //     name: 'Party with Peter',
    //     owner: 'Peter',
    //     description: 'A party!',
    //     state: 1,
    //   },
    //   {
    //     name: 'Lit Party with Peter',
    //     owner: 'Peter',
    //     description: 'A lit party!',
    //     state: 0,
    //   },
    //   {
    //     name: 'Plane flight',
    //     owner: 'Peter',
    //     description: 'Zoom zoom',
    //     state: 2,
    //   },
    // ];
    // const fuseData = await mockAsyncWithData(mockedProfileFuses, 1000);
    const parsedFuseData = fuseQueryParser(eventQueryData);

    const setFuses = [];
    const litFuses = [];
    const completedFuses = [];

    parsedFuseData.forEach((fuse) => {
      // TODO eventually transition to using enum for fuse states
      const newFuse = fuse;

      switch (fuse.state) {
        case 'SET':
          newFuse.state = 0;
          setFuses.push(newFuse);
          break;
        case 'LIT': {
          newFuse.state = 1;
          litFuses.push(newFuse);
          break;
        }
        case 'COMPLETED': {
          newFuse.state = 2;
          completedFuses.push(newFuse);
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
    if (eventQueryLoading) {
      return;
    }

    getProfileData('');
    getProfileFuses('');
  }, [eventQueryData]);

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
