import React from 'react';

import NewFuse from '../screens/NewFuse';
import SettingsScreen, { settingsHeaderOptions } from '../screens/SettingsScreen';
import EditProfileDetailsScreen, { editProfileHeaderOptions } from '../screens/EditProfileDetailsScreen';
import LightFuse from '../screens/LightFuse';

import screenIds from './ScreenIds';

const Screens = {
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
  editProfile: {
    name: screenIds.editProfile,
    component: EditProfileDetailsScreen,
    options: editProfileHeaderOptions,
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
