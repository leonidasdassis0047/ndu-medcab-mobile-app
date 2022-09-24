import {StyleSheet, View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';

import {RowContainer, Text} from '../../../components';
import {colors} from '../../../config';
import {calculateTotal} from '../../../utils/services';
import {AppStoreRootState} from '../../../stores';

const PricesSection = () => {
  const cart = useSelector((state: AppStoreRootState) => state.cart);

  const shippingFee = 5000;

  return (
    <View style={styles.container}>
      <RowContainer style={{marginBottom: 8}}>
        <Text>Shipping</Text>
        <Text style={{color: colors.accent, fontSize: 16}}>
          {shippingFee} ugx
        </Text>
      </RowContainer>

      <RowContainer style={{marginBottom: 8}}>
        <Text>Total</Text>
        <Text style={{color: colors.accent, fontSize: 16}}>
          {calculateTotal(cart.items)} ugx
        </Text>
      </RowContainer>

      <RowContainer style={{marginBottom: 8}}>
        <Text>Total</Text>
        <Text style={{color: colors.primary, fontSize: 16}}>
          {calculateTotal(cart.items) + shippingFee} ugx
        </Text>
      </RowContainer>
    </View>
  );
};

export default PricesSection;

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
});
