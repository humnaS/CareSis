/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, StatusBar} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import {
  NavigationContainer,
  DarkTheme,
  DrawerActions,
} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from './src/Splash screen'
import Login from './src/Login'
import Signup from './src/Sign Up'
import GetStarted from './src/Get Started'
import Consultation from "./src/Consultation"
import Chat from './src/Personal Information'
import Suggestion from './src/Suggestions'
import PersonalInformation from './src/Personal Information';

const Stack = createStackNavigator();

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Splash" component={SplashScreen} />
          <Stack.Screen name="login" component={Login} />
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="GetStarted" component={GetStarted} />
          <Stack.Screen name="Consultation" component={Consultation} />
          <Stack.Screen name="Chat" component={Chat} />
          <Stack.Screen name="PersonalInformation" component={PersonalInformation} />
          <Stack.Screen name="Suggestion" component={Suggestion} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
