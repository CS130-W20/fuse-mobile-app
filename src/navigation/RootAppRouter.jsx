import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Login from '../screens/Login';
import { AppTabNavigator } from './AppTabNavigator';
import screenIds from './ScreenIds';

const rootStackOptions = {
  headerShown: false,
};

function getRootScreens(token, rootStack) {
  return (
    token == null
      ? (
        <>
          <rootStack.Screen name={screenIds.login} component={Login} />
        </>
      )
      : (
        <>
          <rootStack.Screen name={screenIds.appTabNavigator} component={AppTabNavigator} />
        </>
      )
  );
}

export default function RootAppRouter() {
  const rootStack = createStackNavigator();
  const mockTokenSuccessfullyFetched = 'mocktoken';
  // const mockTokenSuccessfullyFetched = null;

  return (
    <NavigationContainer>
      <rootStack.Navigator screenOptions={rootStackOptions}>
        {getRootScreens(mockTokenSuccessfullyFetched, rootStack)}
      </rootStack.Navigator>
    </NavigationContainer>
  );
}
