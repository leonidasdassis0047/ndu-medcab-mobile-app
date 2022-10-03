import React from 'react';
import {StyleSheet, View} from 'react-native';

import {Text} from '../../../components';
import {fonts} from '../../../config';

const PaymentSection = () => {
  return (
    <View>
      <Text style={styles.instruction}>Cash on Delivery</Text>
    </View>
  );
};

export default PaymentSection;

const styles = StyleSheet.create({
  instruction: {fontFamily: fonts.bold, marginBottom: 8},
});
