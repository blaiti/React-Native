import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './src/screens/home';
import Profile from './src/screens/profile';
import Notifications from './src/screens/notifications';

import Doc from './src/screens/doc';
import Login from './src/screens/login';
import Register from './src/screens/register';
import JobPage from './src/screens/jobPage';

import Icon from 'react-native-vector-icons/Ionicons';

import * as theme from './src/constants/lightTheme';

import { Badge, withBadge } from 'react-native-elements'

export default function App()  {
    return (
      <NavigationContainer>
        <MainApp/>
      </NavigationContainer>
    );
};



const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen options={{headerShown: false}} name="Doc" component={Doc} />
      <Stack.Screen options={{headerShown: false}} name="Login" component={Login} />
      <Stack.Screen options={{headerShown: false}} name="Register" component={Register} /> 
      <Stack.Screen options={{headerShown: false}} name="MainApp" component={MainApp} />
    </Stack.Navigator>
  );
}

const Main = createStackNavigator();

function MainApp() {
  return (
    <Main.Navigator>
      <Main.Screen options={{headerShown: false}} name="MyTabs" component={MyTabs} />
      <Main.Screen options={{headerShown: false}} name="JobPage" component={JobPage} />
    </Main.Navigator>
  );
}

const Tab = createBottomTabNavigator();

const BadgedIcon = withBadge(6)(Icon)

function MyTabs() {
  return (
    <Tab.Navigator 
      initialRouteName="Home" 
      tabBarOptions={{
        activeTintColor: theme.colors.primaryBlue,
        inactiveTintColor: theme.colors.concreteGray,
        activeBackgroundColor: theme.colors.white,
        inactiveBackgroundColor: theme.colors.white,
        labelStyle: {
          fontWeight: 'bold'} 
      }}>

      <Tab.Screen 
        name="Accueil"
        component={Home}
        options={{
          tabBarLabel: 'Accueil',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-home" color={color} size={26} />
          ),
        }} />
      <Tab.Screen 
        name="Notifications"
        component={Notifications} 
        options={{
          tabBarLabel: 'Notifications',
          tabBarIcon: ({ color }) => (
            <BadgedIcon name="ios-notifications" color={color} size={26} />
          ),
        }} />
      <Tab.Screen 
        name="Profile"
        component={Profile} 
        options={{
          tabBarLabel: 'Profil',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-person" color={color} size={26} />
          ),
        }} />
    </Tab.Navigator>
  );
}
