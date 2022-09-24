import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

import {Text} from '../../../components';
import {colors, fonts} from '../../../config';

type Props = {
  item: {
    name: string;
    image: string;
    price: number;
    count: number;
  };
};
const CartOrderItem: React.FC<Props> = ({item}) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          resizeMode="cover"
          source={{uri: item.image}}
        />
      </View>
      <View
        style={{flex: 1, paddingBottom: 4, justifyContent: 'space-between'}}>
        <Text numberOfLines={2} style={{marginBottom: 4}}>
          {item.name}
        </Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text>{item.price}</Text>
          <Text>x{item.count}</Text>
          <Text style={{color: colors.success, fontFamily: fonts.semiBold}}>
            @{item.price * item.count}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default CartOrderItem;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    marginBottom: 8,
    backgroundColor: colors.white,
    elevation: 1,
    padding: 4,
  },
  imageContainer: {
    height: 60,
    width: 60,
    borderRadius: 4,
    overflow: 'hidden',
    marginRight: 8,
  },
  image: {
    height: '100%',
    width: '100%',
  },
});
