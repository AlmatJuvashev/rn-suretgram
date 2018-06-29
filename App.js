/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {createStackNavigator} from 'react-navigation'
import HomepageComponent from './src/Homepage';
import InstagramPage from './src/InstagramPage';
import ErrorComponent from './src/error/ErrorMessage';



export default class App extends Component<Props> {
  render() {
    return (
      <AppStackNavigator />
    );
  }
}

const AppStackNavigator = new createStackNavigator({
  Home: { screen: HomepageComponent },
  Profile: { screen: InstagramPage },
  Photo: {screen: InstagramPage },
  Error: {screen: ErrorComponent}
}, {
  initialRouteName: 'Home'
})
