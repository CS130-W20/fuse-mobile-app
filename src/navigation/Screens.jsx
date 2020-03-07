import React from 'react';

import NewFuse from '../screens/NewFuse';
import LightFuse from '../screens/LightFuse';
import SizzleFuse from '../screens/SizzleFuse';
import SettingsScreen, { settingsHeaderOptions } from '../screens/SettingsScreen';

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
  sizzleFuse:{
    name: screenIds.sizzleFuse,
    component: SizzleFuse,
  }
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
