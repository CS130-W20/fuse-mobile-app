import React from 'react';
import NewFuse from '../screens/NewFuse';
import LightFuse from '../screens/LightFuse'
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
};

const addScreensToLoginStack = (stack) => {
  const screens = [];

  Object.values(Screens).forEach((screen) => {
    screens.push((
      <stack.Screen
        name={screen.name}
        component={screen.component}
        key={screen.name}
      />
    ));
  });

  return screens;
};

export default addScreensToLoginStack;
