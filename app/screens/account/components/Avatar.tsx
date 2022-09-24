import React from 'react';
import {Image, StyleProp, StyleSheet, View, ViewStyle} from 'react-native';

import {colors} from '../../../config';

type Props = {
  imageUrl?: string;
  size?: number;
  style?: StyleProp<ViewStyle>;
};

const Avatar: React.FC<Props> = ({imageUrl, size, style}) => {
  const SIZE = size || 36;
  const URL =
    imageUrl ||
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60';

  return (
    <View
      style={[
        styles.container,
        {
          height: SIZE,
          width: SIZE,
          borderRadius: SIZE,
        },
        style,
      ]}>
      <Image
        style={{width: '100%', height: '100%'}}
        resizeMode="cover"
        source={{
          uri: URL,
        }}
      />
    </View>
  );
};

export default Avatar;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.placeholder,
    marginVertical: 8,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
});
