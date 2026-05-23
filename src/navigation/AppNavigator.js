import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TabNavigator from './TabNavigator';
import AddSleepScreen from '../screens/AddSleepScreen';
import SearchScreen from '../screens/SearchScreen';
import AddSleepFormScreen from '../screens/AddSleepFormScreen';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#0F172A',
          },
          headerTintColor: '#FFFFFF',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen
          name="Main"
          component={TabNavigator}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="AddSleep"
          component={AddSleepScreen}
          options={{ title: 'Tambah Catatan Tidur' }}
        />

        <Stack.Screen
          name="Search"
          component={SearchScreen}
          options={{ title: 'Cari Riwayat Tidur' }}
        />

        <Stack.Screen
          name="AddSleepForm"
          component={AddSleepFormScreen}
          options={{ title: 'Form Catatan Tidur' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;