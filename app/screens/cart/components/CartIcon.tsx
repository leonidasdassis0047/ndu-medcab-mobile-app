import React, {Fragment} from 'react';
import {StyleSheet, StyleProp, View, ViewStyle} from 'react-native';
import {useSelector} from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {colors} from '../../../config';
import {Text} from '../../../components';
import {AppStoreRootState} from '../../../stores';
import {cartTotalItems} from '../../../utils/services';

type Props = {
  color: string;
  name: string;
  size: number;
};

const CartIcon: React.FC<Props> = ({color, name, size}) => {
  const cart = useSelector((state: AppStoreRootState) => state.cart);

  return (
    <Icon
      badge={cartTotalItems(cart.items)}
      name={name}
      size={size * 1.8}
      color={color}
      style={{marginLeft: 8, backgroundColor: 'transparent'}}
    />
  );
};

export default CartIcon;

const Icon = ({
  badge,
  color,
  name,
  size,
  style,
}: {
  color?: string;
  name: string;
  size?: number;
  style?: StyleProp<ViewStyle>;
  badge?: number;
}) => {
  const ICON_SIZE = size || 30;
  const BADGE = badge as number;

  return (
    <View
      style={[
        {
          padding: 4,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: colors.gray.light,
          borderRadius: ICON_SIZE,
          width: ICON_SIZE,
          height: ICON_SIZE,
        },
        style,
      ]}>
      <Fragment>
        <Ionicons
          color={color || colors.text}
          name={name}
          size={ICON_SIZE * 0.5}
        />
        {BADGE ? (
          <View style={styles.badge}>
            <Text style={{fontSize: 8, color: colors.white}}>{BADGE}</Text>
          </View>
        ) : (
          <View />
        )}
      </Fragment>
    </View>
  );
};

const styles = StyleSheet.create({
  badge: {
    borderRadius: 40,
    height: 22,
    width: 22,
    padding: 4,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
    position: 'absolute',
    top: 0,
    right: -4,
  },
});
