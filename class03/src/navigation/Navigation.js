import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// screens
import Login from '../modules/auth/login/Login';
import Signup from '../modules/auth/signup/Signup';
import Dashboard from '../modules/dashboard/Dashboard';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function BottomTabNavigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Dashboard} />
      <Tab.Screen name="Settings" component={Dashboard} />
    </Tab.Navigator>
  );
}

function AuthStackNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        options={{title: 'Overview'}}
        name="Login"
        component={Login}
      />
      <Stack.Screen name="Signup" component={BottomTabNavigation} />
      {/* <Stack.Screen name="Dashboard" component={Dashboard} /> */}
      {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
    </Stack.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <AuthStackNavigation />
    </NavigationContainer>
  );
}
