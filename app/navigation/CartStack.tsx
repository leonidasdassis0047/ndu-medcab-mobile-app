import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {CartScreen, CheckoutScreen, OrderSuccessScreen} from '../screens';

export type CartStackParamList = {
  Cart: undefined;
  Checkout: undefined;
  OrderSuccess: undefined;
  Explore: undefined;
};

const CartStackNavigator = createNativeStackNavigator<CartStackParamList>();

const CartStack = () => {
  return (
    <CartStackNavigator.Navigator
      initialRouteName="Cart"
      screenOptions={{headerShown: false, animation: 'slide_from_right'}}>
      <CartStackNavigator.Screen name="Cart" component={CartScreen} />
      <CartStackNavigator.Screen name="Checkout" component={CheckoutScreen} />
      <CartStackNavigator.Screen
        name="OrderSuccess"
        component={OrderSuccessScreen}
      />
    </CartStackNavigator.Navigator>
  );
};

export default CartStack;
