import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NotificationsScreen} from '../screens';

export type NotificationsStackParamList = {
  Notifications: undefined;
};

const NotificationsStackNavigator =
  createNativeStackNavigator<NotificationsStackParamList>();

const NotificationsStack = () => {
  return (
    <NotificationsStackNavigator.Navigator
      screenOptions={{headerShown: false, animation: 'slide_from_right'}}>
      <NotificationsStackNavigator.Screen
        name="Notifications"
        component={NotificationsScreen}
      />
    </NotificationsStackNavigator.Navigator>
  );
};

export default NotificationsStack;
