import {ScrollView, StatusBar, StyleSheet, View} from 'react-native';
import React, {Fragment} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {useDispatch, useSelector} from 'react-redux';

import {Button, RowContainer, ScreenWrapper, Text} from '../../components';
import CartCard from './components/CartCard';
import {colors} from '../../config';

import {AppStoreRootState} from '../../stores';
import {cartTotalItems} from '../../utils/services';
import {clearCart} from '../../stores/cart/cartSlice';
import Header from './components/Header';
import {CartStackParamList} from '../../navigation/CartStack';
import PricesSection from './components/PricesSection';

type Props = NativeStackScreenProps<CartStackParamList, 'Checkout'> & {};

const Cart: React.FC<Props> = ({navigation}) => {
  const cart = useSelector((state: AppStoreRootState) => state.cart);
  const auth = useSelector((state: AppStoreRootState) => state.auth);

  const dispatch = useDispatch();

  return (
    <Fragment>
      <ScreenWrapper withStatusBar>
        <Header cartTotal={cartTotalItems(cart.items)} title="Cart" />

        <ScrollView style={{padding: 8, flex: 1}}>
          {cart.items.map(item => (
            <CartCard cartItem={item} key={item.id.toString()} />
          ))}
        </ScrollView>

        <View style={styles.bottomView}>
          {/* prices section */}
          <PricesSection />

          <RowContainer style={{marginVertical: 8}}>
            <Text
              onPress={() => dispatch(clearCart())}
              style={styles.clearText}>
              Clear
            </Text>
            <Button
              text="Checkout"
              style={styles.checkoutButton}
              onPress={() => {
                // check auth before proceeding
                if (!auth.token) {
                  // dispatch auth navigation
                  // return;
                }

                navigation.navigate('Checkout');
              }}
            />
          </RowContainer>
        </View>
      </ScreenWrapper>
    </Fragment>
  );
};

export default Cart;

const styles = StyleSheet.create({
  bottomView: {
    padding: 8,
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 1,
    backgroundColor: colors.white,
    borderTopColor: colors.gray.light,
    borderTopWidth: 1.4,
    borderRadius: 8,
  },
  checkoutButton: {
    width: '60%',
  },
  clearText: {
    color: colors.primary,
  },
});
