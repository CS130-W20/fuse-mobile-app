import React from 'react';

import NewFuse from '../screens/NewFuse';
import SettingsScreen, { settingsHeaderOptions } from '../screens/SettingsScreen';

import screenIds from './ScreenIds';

const Screens = {
  newFuse: {
    name: screenIds.newFuse,
    component: NewFuse,
  },
  settings: {
    name: screenIds.settings,
    component: SettingsScreen,
    options: settingsHeaderOptions,
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
