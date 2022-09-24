import React from 'react';
import {View, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';

import {fonts} from '../../../config';
import {RowContainer, Text} from '../../../components';
import {AppStoreRootState} from '../../../stores';
import CartOrderItem from './CartOrderItem';

const OrderSection = () => {
  const cart = useSelector((state: AppStoreRootState) => state.cart);

  return (
    <View>
      <Text style={styles.instruction}>Order items</Text>
      {cart.items.map(item => {
        return <CartOrderItem item={item} key={item.id} />;
      })}

      <Text style={styles.instruction}>Contact information</Text>
      <RowContainer>
        <Text>Email</Text>
        <Text>leonidasdassis@gmail.com</Text>
      </RowContainer>
      <RowContainer>
        <Text>Phone number</Text>
        <Text>+256 700 640450</Text>
      </RowContainer>

      <Text style={styles.instruction}>Shipping address</Text>
      <Text>Mengo, Kampala</Text>
      <Text>Near Muteesa 1 Royal university</Text>

      <Text style={styles.instruction}>Payment</Text>
      <RowContainer>
        <Text>Mode</Text>
        <Text>Cash on Delivery</Text>
      </RowContainer>
    </View>
  );
};

export default OrderSection;

const styles = StyleSheet.create({
  instruction: {fontFamily: fonts.bold, marginTop: 4, marginBottom: 16},
});
