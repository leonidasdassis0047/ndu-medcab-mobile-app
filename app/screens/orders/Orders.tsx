import {StyleSheet, View, StatusBar} from 'react-native';
import React, {useState} from 'react';
import VectorImage from 'react-native-vector-image';

import {ScreenWrapper, Text} from '../../components';
import {colors, fonts} from '../../config';

const NotFound = () => {
  return (
    <ScreenWrapper
      style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <VectorImage
        source={require('../../assets/svgs/empty.svg')}
        style={{width: 300, height: 300}}
      />
      <Text style={{fontSize: 18, fontFamily: fonts.semiBold}}>
        No orders yet
      </Text>
    </ScreenWrapper>
  );
};

const Orders = () => {
  const [orders] = useState([]);

  return (
    <ScreenWrapper>
      {orders.length ? <View></View> : <NotFound />}
    </ScreenWrapper>
  );
};

export default Orders;

const styles = StyleSheet.create({
  orderContainer: {
    height: 100,
    width: '100%',
    backgroundColor: colors.white,
    elevation: 2,
    marginBottom: 4,
  },
});
