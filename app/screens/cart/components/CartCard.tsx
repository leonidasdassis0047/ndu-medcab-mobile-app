import {
  Image,
  Pressable,
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import React, {useState} from 'react';
import {useDispatch} from 'react-redux';

import Ionicons from 'react-native-vector-icons/Ionicons';

import {Text} from '../../../components';
import {colors, fonts} from '../../../config';

import {
  incrementItemCount,
  decrementItemCount,
  removeItem,
} from '../../../stores/cart/cartSlice';

type Props = {
  cartItem: {
    id: string;
    name: string;
    image: string;
    price: number;
    count: number;
  };
};

const CartCard: React.FC<Props> = ({cartItem}) => {
  const [open, setOpen] = useState<boolean>();
  const dispatch = useDispatch();

  const handlePress = () => {
    setOpen(!open);
  };

  const increaseCount = () => {
    dispatch(incrementItemCount(cartItem.id));
  };

  const decreaseCount = () => {
    dispatch(decrementItemCount(cartItem.id));
  };

  const removeFromCart = () => {
    dispatch(removeItem(cartItem.id));
  };

  return (
    <Pressable
      onPress={handlePress}
      style={{
        backgroundColor: colors.white,
        elevation: 2,
        width: '100%',
        marginBottom: 8,
        paddingVertical: 8,
        borderRadius: 2,
      }}>
      {/* actions section */}
      <View style={styles.container}>
        <View style={styles.detailsContainer}>
          <Text
            style={{
              marginBottom: 8,
              fontFamily: fonts.regular,
            }}>
            {cartItem.name}
          </Text>
          <Text
            style={{
              color: colors.primary,
              fontSize: 14.6,
            }}>
            {cartItem.price} ugx
          </Text>
        </View>
        {/* image section */}
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            resizeMode="cover"
            source={{uri: cartItem.image}}
          />
        </View>
      </View>

      {/* modifiers  */}
      {open && (
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-around',
            paddingHorizontal: 12,
            paddingVertical: 8,
          }}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'center',
            }}>
            <Icon name="ios-remove-outline" onPress={decreaseCount} />
            <Text style={{marginHorizontal: 16}}>{cartItem.count}</Text>
            <Icon name="ios-add-outline" onPress={increaseCount} />
          </View>

          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'flex-end',
            }}>
            <Icon
              color={colors.error}
              name="ios-trash-outline"
              onPress={removeFromCart}
            />
          </View>
        </View>
      )}
    </Pressable>
  );
};

const Icon = ({
  color,
  name,
  onPress,
  size,
  style,
}: {
  color?: string;
  name: string;
  onPress: () => void;
  size?: number;
  style?: StyleProp<ViewStyle>;
}) => {
  const ICON_SIZE = size || 30;
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
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
      <Ionicons
        color={color || colors.text}
        name={name}
        size={ICON_SIZE * 0.5}
      />
    </TouchableOpacity>
  );
};

export default CartCard;

const styles = StyleSheet.create({
  container: {
    borderRadius: 2,
    width: '100%',
    flexDirection: 'row',
    paddingVertical: 4,
    paddingHorizontal: 4,
  },
  imageContainer: {
    height: 68,
    width: 72,
    borderRadius: 4,
    overflow: 'hidden',
    marginRight: 4,
  },
  image: {
    height: '100%',
    width: '100%',
  },
  detailsContainer: {
    flex: 1,
    paddingHorizontal: 4,
  },
});
