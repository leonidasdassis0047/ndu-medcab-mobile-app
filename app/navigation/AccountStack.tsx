import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ProfileScreen} from '../screens';

export type AccountStackParamList = {
  Profile: undefined;
};

const AccountStackNavigator =
  createNativeStackNavigator<AccountStackParamList>();

const AccountStack = () => {
  return (
    <AccountStackNavigator.Navigator
      screenOptions={{headerShown: false, animation: 'slide_from_right'}}>
      <AccountStackNavigator.Screen name="Profile" component={ProfileScreen} />
    </AccountStackNavigator.Navigator>
  );
};

export default AccountStack;
