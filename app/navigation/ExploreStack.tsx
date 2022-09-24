import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ExploreScreen, MedicalStoreScreen} from '../screens';

export type ExploreStackParamList = {
  Explore: undefined;
  MedicalStore: {
    _id: string;
    name?: string;
  };
  MedicineDetails: {
    _id: string;
  };
  CategoryDetails: {
    _id?: string;
    name?: string;
  };
};

const ExploreStackNavigator =
  createNativeStackNavigator<ExploreStackParamList>();

const ExploreStack = () => {
  return (
    <ExploreStackNavigator.Navigator
      screenOptions={{headerShown: false, animation: 'slide_from_right'}}>
      <ExploreStackNavigator.Screen name="Explore" component={ExploreScreen} />
      {/* <ExploreStackNavigator.Screen
        name="MedicineDetails"
        component={MedicineDetails}
      /> */}
      <ExploreStackNavigator.Screen
        name="MedicalStore"
        component={MedicalStoreScreen}
        options={{animation: 'fade_from_bottom'}}
      />
    </ExploreStackNavigator.Navigator>
  );
};

export default ExploreStack;
