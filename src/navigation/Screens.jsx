import React from 'react';

import NewFuse from '../screens/NewFuse';
import CreateFuse from '../screens/CreateFuse';
import LightFuse from '../screens/LightFuse';
import SizzleFuse from '../screens/SizzleFuse';
import SettingsScreen, { settingsHeaderOptions } from '../screens/SettingsScreen';
import EditProfileDetailsScreen, { editProfileHeaderOptions } from '../screens/EditProfileDetailsScreen';
import ProfileScreen from '../screens/ProfileScreen';

import SetFuseDetails from '../components/SetFuseDetails';
import FriendListTest, { friendsListHeaderOptions } from '../components/testers/FriendsListTest';

import screenIds from './ScreenIds';

const Screens = {
  friendListTest: {
    name: screenIds.friendListTest,
    component: FriendListTest,
    options: friendsListHeaderOptions,
  },
  setFuseDetails: {
    name: screenIds.setFuseDetails,
    component: SetFuseDetails,
  },
  createFuse: {
    name: screenIds.createFuse,
    component: CreateFuse,
  },
  newFuse: {
    name: screenIds.newFuse,
    component: NewFuse,
  },
  lightFuse: {
    name: screenIds.lightFuse,
    component: LightFuse,
  },
  settings: {
    name: screenIds.settings,
    component: SettingsScreen,
    options: settingsHeaderOptions,
  },
  sizzleFuse: {
    name: screenIds.sizzleFuse,
    component: SizzleFuse,
  },
  editProfile: {
    name: screenIds.editProfile,
    component: EditProfileDetailsScreen,
    options: editProfileHeaderOptions,
  },
  profile: {
    name: screenIds.userProfile,
    component: ProfileScreen,
  },
};

const addScreensToLoginStack = (stack) => {
  const screens = [];

  Object.values(Screens).forEach((screen) => {
    screens.push((
      <stack.Screen
        name={screen.name}
        component={screen.component}
        key={screen.name}
        options={screen.options}
      />
    ));
  });

  return screens;
};

export default addScreensToLoginStack;
