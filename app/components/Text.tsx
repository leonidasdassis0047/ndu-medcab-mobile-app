import React from 'react';
import {StyleSheet, Text, TextProps} from 'react-native';

import {defaultStyles} from '../config';

const AppText: React.FC<TextProps & {children: React.ReactNode}> = ({
  children,
  ...props
}) => {
  return (
    <Text style={styles.text} {...props}>
      {children}
    </Text>
  );
};

export default AppText;

const styles = StyleSheet.create({
  text: {
    ...defaultStyles.font,
  },
});
