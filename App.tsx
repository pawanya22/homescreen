import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './src/navigations/AuthNavigator'; // Corrected import

export default function App() {
  return (
    <NavigationContainer>
        <AuthNavigator />
    </NavigationContainer>
  );
}
