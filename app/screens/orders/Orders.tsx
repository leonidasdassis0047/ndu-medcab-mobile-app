import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import VectorImage from 'react-native-vector-image';

import {ScreenWrapper, Text} from '../../components';
import {colors, fonts} from '../../config';
import ordersApis from '../../apis/orders';
import {useApi} from '../../hooks';

const NotFound = () => {
  return (
    <ScreenWrapper
      style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <VectorImage
        source={require('../../assets/svgs/empty.svg')}
        style={{width: 300, height: 300}}
      />
      <Text
        style={{fontSize: 16, fontFamily: fonts.semiBold, color: colors.black}}>
        No orders yet
      </Text>
    </ScreenWrapper>
  );
};

const Orders = () => {
  const [orders, setOrders] = useState<Array<any>>([]);
  const ordersApi = useApi(ordersApis.getOrders);

  React.useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    const response = await ordersApi.request();
    if (!response.ok) {
      return;
    }
    setOrders(response.data.data);
  };

  return (
    <ScreenWrapper>
      {orders.length ? (
        <View>
          <Text>{orders[0].id}</Text>
        </View>
      ) : (
        <NotFound />
      )}
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
