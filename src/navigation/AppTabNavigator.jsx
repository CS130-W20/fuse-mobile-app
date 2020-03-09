import React from 'react';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import screenIds from './ScreenIds';

// Import screens, containers, header styles you need from the screen/container directory
import ProfileScreen, { profileHeaderOptions } from '../screens/ProfileScreen';
import NewsFeedContainer from '../containers/NewsFeedContainer';
import ExploreContainer from '../containers/ExploreContainer';
import Notification from '../screens/Notification';

// Stack ids. Each tab in our tab navigation has a stack
export const NavigationStackIds = {
  feed: 'Feed',
  explore: 'Explore',
  notifications: 'Notifications',
  profile: 'Profile',
};

/**
 * Add your screen details here to register it as part of the navigation
 * system. Use the following template:
 *
 * myNewScreen: {
 *  name: string identifier for your screen. Registered in NavigationScreenIds
 *  component: reference to the component that renders this screen
 *  stack: indicate which of the NavigationTabStackIds this screen falls under
 *
 * }
 */
const Screens = {
  newsFeed: {
    name: screenIds.newsFeed,
    component: NewsFeedContainer,
    stack: NavigationStackIds.feed,
    options: {
      headerTitle: 'fuse',
    },
  },
  explore: {
    name: screenIds.explore,
    component: ExploreContainer,
    stack: NavigationStackIds.explore,
    options: {
      headerTitle: 'fuse',
    },
  },
  notifications: {
    name: screenIds.notifications,
    component: Notification,
    stack: NavigationStackIds.notifications,
    options: {
      headerTitle: 'fuse',
    },
  },
  profile: {
    name: screenIds.myProfile,
    component: ProfileScreen,
    stack: NavigationStackIds.profile,
    options: profileHeaderOptions,
  },
};

/** /////////////////////////////////////////////////////////////////////
 *  No need to edit below this! Add your screens above!
 *  ///////////////////////////////////////////////////////////////////// */

/**
 * Automatically create screens and add them to the appropriate navigation
 * stack according to the data structures above. If you're adding a new screen
 * and reading this code you shouldn't have to worry about this
 */
const createNavigationStacks = () => {
  const stackToScreenRef = {};

  Object.values(NavigationStackIds).forEach((stackId) => {
    stackToScreenRef[stackId] = {
      stackNavigator: createStackNavigator(),
      stackScreens: [],
    };
  });

  // Create screen components for each screen and link lists of screens to their
  // appropriate stack via our reference data structure stackToScreenRef
  Object.values(Screens).forEach((screen) => {
    const targetStackId = screen.stack;
    const TargetStack = stackToScreenRef[targetStackId].stackNavigator;

    const screenComponent = (
      <TargetStack.Screen
        name={screen.name}
        component={screen.component}
        key={screen.name}
        options={screen.options}
      />
    );

    stackToScreenRef[targetStackId].stackScreens.push(screenComponent);
  });

  // Now create the actual React stack components
  const navigationStacks = {};

  Object.keys(stackToScreenRef).forEach((stackId) => {
    const Stack = stackToScreenRef[stackId].stackNavigator;

    // Store a function returning the component becuase that's how React expects
    // its components when adding to jsx
    navigationStacks[stackId] = () => (
      <Stack.Navigator>
        {stackToScreenRef[stackId].stackScreens}
      </Stack.Navigator>
    );
  });

  return navigationStacks;
};

// Options to configure how the tabs look
const focusedTabColor = 'lightcoral';
const unfocusedTabColor = 'grey';
const tabScreenOptions = {
  feed: {
    // eslint-disable-next-line react/prop-types
    tabBarIcon: ({ focused }) => (
      focused
        ? <MaterialCommunityIcons name="home-outline" size={30} color={focusedTabColor} />
        : <MaterialCommunityIcons name="home-outline" size={30} color={unfocusedTabColor} />
    ),
  },
  explore: {
    // eslint-disable-next-line react/prop-types
    tabBarIcon: ({ focused }) => (
      focused
        ? <MaterialIcons name="search" size={30} color={focusedTabColor} />
        : <MaterialIcons name="search" size={30} color={unfocusedTabColor} />
    ),
  },
  notifications: {
    // eslint-disable-next-line react/prop-types
    tabBarIcon: ({ focused }) => (
      focused
        ? <MaterialIcons name="notifications-none" size={30} color={focusedTabColor} />
        : <MaterialIcons name="notifications-none" size={30} color={unfocusedTabColor} />
    ),
  },
  profile: {
    // eslint-disable-next-line react/prop-types
    tabBarIcon: ({ focused }) => (
      focused
        ? <MaterialCommunityIcons name="account-outline" size={30} color={focusedTabColor} />
        : <MaterialCommunityIcons name="account-outline" size={30} color={unfocusedTabColor} />
    ),
  },
};

const tabBarOptions = {
  showLabel: false, // hides text labels for navigation bar
};

// Create the tab navigator using react navigation
const Tab = createBottomTabNavigator();

// Build the react component for the tab navigator
export function AppTabNavigator() {
  const navigationStacks = createNavigationStacks();

  return (
    <Tab.Navigator
      tabBarOptions={tabBarOptions}
    >
      <Tab.Screen
        name={NavigationStackIds.feed}
        component={navigationStacks[NavigationStackIds.feed]}
        options={tabScreenOptions.feed}
      />
      <Tab.Screen
        name={NavigationStackIds.explore}
        component={navigationStacks[NavigationStackIds.explore]}
        options={tabScreenOptions.explore}
      />
      <Tab.Screen
        name={NavigationStackIds.notifications}
        component={navigationStacks[NavigationStackIds.notifications]}
        options={tabScreenOptions.notifications}
      />
      <Tab.Screen
        name={NavigationStackIds.profile}
        component={navigationStacks[NavigationStackIds.profile]}
        options={tabScreenOptions.profile}
      />
    </Tab.Navigator>
  );
}
