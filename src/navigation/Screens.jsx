import React from 'react';
import NewFuse from '../screens/NewFuse';
import screenIds from './ScreenIds';

const Screens = {
  newFuse: {
    name: screenIds.newFuse,
    component: NewFuse,
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
