import React, { PureComponent } from 'react';
import {
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from '../navigation/AppRouter';

export default class LoggedIn extends PureComponent {
  constructor(props) {
    super(props);
    this.tabNavigator = TabNavigator();
  }

  render() {
    return (
      <NavigationContainer>
        {this.tabNavigator}
      </NavigationContainer>
    );
  }
}
