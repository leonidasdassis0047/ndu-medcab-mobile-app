import React from 'react';
import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';

const RowContainer: React.FC<{
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}> = ({children, style}) => {
  return <View style={[styles.container, style]}>{children}</View>;
};

export default RowContainer;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
