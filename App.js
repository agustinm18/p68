import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import FacebookScreen from './screens/fb';
import InstagramScreen from './screens/in';

export default class App extends React.Component {
  render(){
    return (
      <AppContainer />
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  Instagram: {screen:InstagramScreen},
  Facebook: {screen:FacebookScreen},
});

const AppContainer = createAppContainer(TabNavigator)