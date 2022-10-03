import React from 'react';
import {
  Pressable,
  StyleProp,
  StyleSheet,
  TextInput as RNTextInput,
  TextInputProps,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {Text} from '.';
import {colors, fonts} from '../config';

type Props = TextInputProps & {
  style?: StyleProp<TextStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  icon?: string;
  placeholder?: string;
  width?: string | number;
  label?: string;
  labelStyle?: StyleProp<TextStyle>;
};

const PhoneTextInput: React.FC<Props> = ({
  containerStyle,
  icon,
  label,
  labelStyle,
  placeholder,
  style,
  width,
  ...props
}) => {
  return (
    <React.Fragment>
      {label && <Text style={[styles.label, labelStyle]}>{label}</Text>}
      <View style={[styles.container, containerStyle, {width}]}>
        {icon && (
          <Ionicons
            name={icon}
            size={16}
            color={colors.placeholder}
            style={styles.icon}
          />
        )}
        <Pressable style={{paddingRight: 4}}>
          <Text>{+256}</Text>
        </Pressable>
        <RNTextInput
          placeholder={placeholder}
          placeholderTextColor={colors.placeholder}
          style={[styles.input, style]}
          {...props}
        />
      </View>
    </React.Fragment>
  );
};

export default PhoneTextInput;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    marginVertical: 6,
    width: '100%',
    borderRadius: 4,
    elevation: 1,
  },
  icon: {
    marginRight: 4,
  },
  input: {
    backgroundColor: colors.white,
    color: colors.text,
    padding: 8,
    paddingBottom: 4,
    flex: 1,
    fontSize: 14,
    fontFamily: fonts.regular,
  },
  label: {
    fontFamily: fonts.medium,
    fontSize: 14,
    alignSelf: 'flex-start',
  },
});
