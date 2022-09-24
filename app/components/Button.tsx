import React from 'react';
import {
  StyleProp,
  StyleSheet,
  TextStyle,
  TouchableHighlight,
  TouchableHighlightProps,
  ViewStyle,
} from 'react-native';
import {Text} from '.';
import {colors, fonts} from '../config';

type Props = {
  style?: StyleProp<ViewStyle>;
  onPress: () => void;
  text: string;
  textStyle?: StyleProp<TextStyle>;
};

const AppButton: React.FC<TouchableHighlightProps & Props> = ({
  style,
  onPress,
  text,
  textStyle,
  ...props
}) => {
  return (
    <TouchableHighlight
      style={[styles.container, style]}
      onPress={onPress}
      activeOpacity={0.2}
      delayPressOut={0}
      underlayColor={colors.background}
      {...props}>
      <Text style={[styles.text, textStyle]}>{text}</Text>
    </TouchableHighlight>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 4,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    width: '100%',
    marginVertical: 2,
    padding: 10,
  },
  text: {
    color: '#FFF',
    fontSize: 15,
    textTransform: 'uppercase',
    fontFamily: fonts.medium,
  },
});
