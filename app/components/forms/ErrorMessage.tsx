import {StyleProp, StyleSheet, TextStyle} from 'react-native';
import React from 'react';

import {Text} from '../';
import {colors} from '../../config';

type Props = {
  error: string;
  visible?: boolean;
  style?: StyleProp<TextStyle>;
};

const ErrorMessage: React.FC<Props> = ({error, style, visible}) => {
  if (!visible || !error) {
    return null;
  }
  return <Text style={[styles.error, style]}>{error}</Text>;
};

export default ErrorMessage;

const styles = StyleSheet.create({
  error: {
    color: colors.error,
    alignSelf: 'flex-start',
    marginBottom: 8,
    fontSize: 15,
  },
});
