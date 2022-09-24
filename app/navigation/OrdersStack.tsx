import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {OrdersScreen} from '../screens';

export type OrdersStackParamList = {
  Orders: undefined;
};

const OrdersStackNavigator = createNativeStackNavigator<OrdersStackParamList>();

const OrdersStack = () => {
  return (
    <OrdersStackNavigator.Navigator
      screenOptions={{headerShown: false, animation: 'slide_from_right'}}>
      <OrdersStackNavigator.Screen name="Orders" component={OrdersScreen} />
    </OrdersStackNavigator.Navigator>
  );
};

export default OrdersStack;
