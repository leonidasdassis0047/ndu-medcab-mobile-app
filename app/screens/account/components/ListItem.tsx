import React from 'react';
import {
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {colors} from '../../../config';
import {Text} from '../../../components';

type Props = {
  icon?: string;
  title: string;
  subTitle?: string;
  onPress?: () => void;
};

const ListItem: React.FC<Props> = ({icon, onPress, title, subTitle}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        {/* if icon name is provided */}
        {icon && (
          <Icon
            name={icon}
            style={{marginRight: 16, backgroundColor: 'transparent'}}
          />
        )}

        <View style={{flex: 1}}>
          <Text style={{fontSize: 15}}>{title}</Text>
          {subTitle && <Text>{subTitle}</Text>}
        </View>

        <Icon
          name="ios-chevron-forward-outline"
          style={{marginLeft: 8, backgroundColor: 'transparent'}}
        />
      </View>
    </TouchableOpacity>
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
  onPress?: () => void;
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

export default ListItem;

const styles = StyleSheet.create({
  container: {
    height: 60,
    width: '100%',
    backgroundColor: colors.white,
    borderTopWidth: 1,
    borderTopColor: '#eee',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    marginBottom: 8,
    paddingHorizontal: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
