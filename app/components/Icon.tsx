import React from 'react';
import {Pressable} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

type Props = {
  name: string;
  onPress?: () => void;
  size?: number;
  color?: string;
  backgroundColor?: string;
};

const Icon: React.FC<Props> = ({
  name,
  onPress,
  size = 40,
  backgroundColor = '#000',
  color = '#fff',
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Ionicons name={name} color={color} size={size * 0.5} />
    </Pressable>
  );
};

export default Icon;
