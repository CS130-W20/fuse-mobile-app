import React from 'react';

import NewFuse from '../screens/NewFuse';
import LightFuse from '../screens/LightFuse';
import SizzleFuse from '../screens/SizzleFuse';
import SettingsScreen, { settingsHeaderOptions } from '../screens/SettingsScreen';
import EditProfileDetailsScreen, { editProfileHeaderOptions } from '../screens/EditProfileDetailsScreen';
import ProfileScreen from '../screens/ProfileScreen';

import SetFuseDetailsTest from '../components/testers/SetFuseDetailsTest';

import screenIds from './ScreenIds';

const Screens = {
  setFuseDetailsTest: {
    name: screenIds.setFuseDetailsTest,
    component: SetFuseDetailsTest,
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
