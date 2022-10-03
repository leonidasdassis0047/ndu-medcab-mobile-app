import {View} from 'react-native';
import React from 'react';
// import VectorImage from 'react-native-vector-image';
import {ProgressSteps, ProgressStep} from 'react-native-progress-steps';

import {useDispatch, useSelector} from 'react-redux';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import Header from './components/Header';
import {AppStoreRootState} from '../../stores';
import {cartTotalItems} from '../../utils/services';
import {colors, fonts} from '../../config';
import {ScreenWrapper} from '../../components';
import ShippingSection from './components/ShippingSection';
import PaymentSection from './components/PaymentSection';
import OrderSection from './components/OrderSection';
import {CartStackParamList} from '../../navigation/CartStack';
import {clearCart} from '../../stores/cart/cartSlice';
import {createOrder} from '../../stores/orders/ordersSlice';

// const NotFound = () => {
//   return (
//     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//       {/* <VectorImage source={require('../../config/assets/_404.svg')} /> */}
//       <Text>No orders yet</Text>
//     </View>
//   );
// };

type Props = NativeStackScreenProps<CartStackParamList, 'Checkout'> & {};

const Checkout: React.FC<Props> = ({navigation, route}) => {
  const cart = useSelector((state: AppStoreRootState) => state.cart);
  const dispatch = useDispatch();

  const user = route.params.user;
  console.log(user);

  return (
    <ScreenWrapper withStatusBar>
      <Header
        cartTotal={cartTotalItems(cart.items)}
        icon="ios-arrow-back"
        title="Checkout"
        titleStyle={{textAlign: 'center'}}
      />

      <View style={{flex: 1}}>
        <ProgressSteps
          activeStepIconBorderColor={colors.primary}
          labelFontFamily={fonts.medium}
          activeLabelColor={colors.primary}
          labelColor={colors.text}
          topOffset={8}>
          {/* shipping */}
          <ProgressStep
            label="Shipping"
            scrollViewProps={{paddingHorizontal: 16}}>
            <ShippingSection user={user} />
          </ProgressStep>

          {/* payment */}
          <ProgressStep
            label="Payment"
            scrollViewProps={{paddingHorizontal: 16}}>
            <PaymentSection />
          </ProgressStep>

          {/* order */}
          <ProgressStep
            label="Order"
            scrollViewProps={{paddingHorizontal: 8}}
            nextBtnStyle={{
              backgroundColor: colors.success,
              borderRadius: 4,
              paddingHorizontal: 24,
            }}
            nextBtnTextStyle={{color: colors.white}}
            onSubmit={() => {
              setTimeout(() => {
                const order = {
                  store: cart.selectedStore,
                  order_items: cart.items.map(item => {
                    return {
                      id: item.id,
                      quantity: item.count,
                    };
                  }),
                };

                dispatch(createOrder(order));
                navigation.navigate('OrderSuccess');

                // then clear cart
                dispatch(clearCart());
              }, 2000);
            }}>
            <OrderSection />
          </ProgressStep>
        </ProgressSteps>
      </View>

      {/* prices section */}
      {/* <View style={{marginVertical: 8, paddingHorizontal: 8}}>
        <PricesSection />
        <Button text="order" onPress={() => {}} />
      </View> */}
    </ScreenWrapper>
  );
};

export default Checkout;
