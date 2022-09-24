import {
  StyleProp,
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import React, {Fragment} from 'react';
import {useNavigation} from '@react-navigation/native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import {colors, fonts} from '../../../config';
import {Text} from '../../../components';

type Props = {
  cartTotal: number;
  icon?: string;
  title: string;
  titleStyle?: StyleProp<TextStyle>;
};

const Header: React.FC<Props> = ({cartTotal, icon, title, titleStyle}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {icon && (
        <Icon
          style={{marginRight: 8}}
          name={icon}
          onPress={() => navigation.goBack()}
        />
      )}

      <View style={{flex: 1}}>
        <Text style={[{fontSize: 15, fontFamily: fonts.bold}, titleStyle]}>
          {title}
        </Text>
      </View>

      <Icon
        badge={cartTotal}
        name="ios-cart-outline"
        size={40}
        color={colors.primary}
        style={{marginLeft: 8, backgroundColor: 'transparent'}}
      />
    </View>
  );
};

const Icon = ({
  badge,
  color,
  name,
  onPress,
  size,
  style,
}: {
  color?: string;
  name: string;
  onPress?: () => void;
  size?: number;
  style?: StyleProp<ViewStyle>;
  badge?: number;
}) => {
  const ICON_SIZE = size || 30;
  const BADGE = badge as number;

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
      <Fragment>
        <Ionicons
          color={color || colors.text}
          name={name}
          size={ICON_SIZE * 0.5}
        />
        {BADGE ? (
          <View
            style={{
              borderRadius: 40,
              height: 24,
              width: 24,
              padding: 4,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: colors.primary,
              position: 'absolute',
              top: 0,
              right: -4,
            }}>
            <Text style={{fontSize: 10, color: colors.white}}>{BADGE}</Text>
          </View>
        ) : (
          <View />
        )}
      </Fragment>
    </TouchableOpacity>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: colors.white,
    marginBottom: 8,
    paddingHorizontal: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
