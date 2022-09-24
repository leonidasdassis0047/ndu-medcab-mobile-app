import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {AccountStack, CartStack, ExploreStack, NotificationStack} from '.';

import {colors} from '../config';
import OrdersStack from './OrdersStack';
import CartIcon from '../screens/cart/components/CartIcon';

export type RootStackParamList = {
  ExploreStack: undefined;
  CartStack: undefined;
  OrdersStack: undefined;
  NotificationsStack: undefined;
  AccountStack: undefined;
};

const RootStack = createBottomTabNavigator<RootStackParamList>();

const MainNavigation = () => {
  return (
    <RootStack.Navigator
      initialRouteName="ExploreStack"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
      }}>
      <RootStack.Screen
        name="ExploreStack"
        component={ExploreStack}
        options={{
          tabBarIcon: ({color, focused, size}) => (
            <Ionicons
              color={focused ? color : colors.text}
              name="ios-compass-outline"
              size={size}
            />
          ),
        }}
      />
      <RootStack.Screen
        name="CartStack"
        component={CartStack}
        options={{
          tabBarIcon: ({color, focused, size}) => (
            <CartIcon
              color={focused ? color : colors.text}
              name="ios-cart-outline"
              size={size}
            />
          ),
        }}
      />
      <RootStack.Screen
        name="OrdersStack"
        component={OrdersStack}
        options={{
          tabBarIcon: ({color, focused, size}) => (
            <Ionicons
              color={focused ? color : colors.text}
              name="ios-newspaper-outline"
              size={size}
            />
          ),
        }}
      />
      <RootStack.Screen
        name="NotificationsStack"
        component={NotificationStack}
        options={{
          tabBarIcon: ({color, focused, size}) => (
            <Ionicons
              color={focused ? color : colors.text}
              name="ios-notifications-outline"
              size={size}
            />
          ),
        }}
      />
      <RootStack.Screen
        name="AccountStack"
        component={AccountStack}
        options={{
          tabBarIcon: ({color, focused, size}) => (
            <Ionicons
              color={focused ? color : colors.text}
              name="ios-person-outline"
              size={size}
            />
          ),
        }}
      />
    </RootStack.Navigator>
  );
};

export default MainNavigation;
