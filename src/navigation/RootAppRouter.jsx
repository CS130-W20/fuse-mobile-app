import React, { useState, useEffect } from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { useApolloClient, useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

import { AppLoading } from 'expo';
import Login from '../screens/Login';
import { AppTabNavigator } from './AppTabNavigator';
import screenIds from './ScreenIds';
import { USER_QUERY } from '../graphql/GeneralQueries';
import SignUp from '../screens/Signup';

import addScreensToLoginStack from './Screens';

const rootStackOptions = {
  headerShown: false,
};

export default function RootAppRouter() {
  const client = useApolloClient();
  const [user, setUser] = useState(null);

  const rootStack = createStackNavigator();

  // eslint-disable-next-line no-unused-vars
  const { data, loading, error } = useQuery(USER_QUERY);

  // eslint-disable-next-line no-unused-vars
  const unsubscribe = client.onClearStore(() => {
    // eslint-disable-next-line no-console
    console.log('Heard that Apollo client store cleared. Setting user to null and switching to auth stack');
    setUser(null);
  });

  useEffect(() => {
    if (!loading) {
      setUser(error ? null : data.me);
    }
  }, [data, loading, error]);

  // TODO: replace with our own loading screen?
  if (loading) return <AppLoading />;

  return (
    <NavigationContainer>
      <rootStack.Navigator
        screenOptions={rootStackOptions}
        initialRouteName={user ? screenIds.appTabNavigator : screenIds.login}
      >
        {user === null ? (
          <>
            {/* Screens accessible without being logged in */}
            <rootStack.Screen name={screenIds.login} component={Login} />
            <rootStack.Screen name={screenIds.signUp} component={SignUp} />
          </>
        ) : (
          <>
            {/* Screens only accessible when logged in */}
            <rootStack.Screen name={screenIds.appTabNavigator} component={AppTabNavigator} />
            {addScreensToLoginStack(rootStack)}
          </>
        )}
      </rootStack.Navigator>
    </NavigationContainer>
  );
}
