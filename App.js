
import React, {Fragment, Component} from 'react';
import {View, Text } from 'react-native';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Splash from './src/pages/Splash';
import OnBoarding1 from './src/pages/OnBoarding1';
import OnBoarding2 from './src/pages/OnBoarding2';
import OnBoarding3 from './src/pages/OnBoarding3';



const AppNavigator = createStackNavigator({
  Home: {
    screen: OnBoarding1,
  },
  OnBoarding1: OnBoarding1,
  OnBoarding2: OnBoarding2,
  OnBoarding3: OnBoarding3,
});


export default createAppContainer(AppNavigator);



