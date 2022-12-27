// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SearchScreen from './src/screens/SearchScreen';
import ResultsShowScreen from './src/screens/ResultsShowScreen';


const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'rgb(255, 45, 85)',
    background:'white'
  },
};

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator>
        <Stack.Screen name="SearchScreen" component={SearchScreen} options={{ title: 'Business Search', cardStyle: { backgroundColor: 'transparent' }
 }} />
        <Stack.Screen name="ResultsShowScreen" component={ResultsShowScreen} options={{ title: 'Business Search' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;