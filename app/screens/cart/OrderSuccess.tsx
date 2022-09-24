import React from 'react';
import {StyleSheet, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {colors, fonts} from '../../config';
import {Button, ScreenWrapper, Text} from '../../components';
import {CartStackParamList} from '../../navigation/CartStack';

type Props = NativeStackScreenProps<CartStackParamList, 'OrderSuccess'> & {};

const OrderSuccess: React.FC<Props> = ({navigation}) => {
  return (
    <ScreenWrapper style={styles.screen}>
      <View style={styles.card}>
        <Text style={{fontFamily: fonts.bold, fontSize: 20}}>
          Order Success
        </Text>
        <Text style={{fontSize: 17, textAlign: 'center', marginVertical: 8}}>
          Thank you for ordering with us
        </Text>
        <Button
          text="go back home"
          onPress={() => {
            navigation.popToTop();
            navigation.navigate('Explore');
          }}
          style={styles.btn}
        />
      </View>
    </ScreenWrapper>
  );
};

export default OrderSuccess;

const styles = StyleSheet.create({
  screen: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    borderRadius: 32,
    marginVertical: 8,
    width: '80%',
    backgroundColor: colors.success,
  },
  card: {
    width: 300,
    height: 300,
    backgroundColor: colors.white,
    elevation: 2,
    borderRadius: 4,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
