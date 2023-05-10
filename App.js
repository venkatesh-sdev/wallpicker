// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen, Item, LandingScreen } from './src/screens';

import 'react-native-url-polyfill/auto'
import Items from './src/screens/Items';
import { StatusBar } from 'expo-status-bar';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
    <StatusBar style='light'/>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='LandingScreen'>
        <Stack.Screen name="LandingScreen" component={LandingScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="Items" component={Items} />
        <Stack.Screen name="Item" component={Item} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
