import {
  SafeAreaView,
  ScrollView,
  ScrollViewProps,
  StatusBar,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';

type ScreenWrapperProps = ScrollViewProps & {
  children: React.ReactNode;
  contentContainerStyle?: StyleProp<ViewStyle>;
  style?: StyleProp<ViewStyle>;
  scrollable?: boolean;
  withStatusBar?: boolean;
};
const ScreenWrapper: React.FC<ScreenWrapperProps> = ({
  contentContainerStyle,
  children,
  withStatusBar = false,
  scrollable = false,
  style,
  ...props
}) => {
  const containerStyle = [styles.container, {backgroundColor: '#FFF'}];
  return (
    <SafeAreaView style={{flex: 1}}>
      {withStatusBar && <StatusBar translucent={false} />}
      {scrollable ? (
        <ScrollView
          contentContainerStyle={contentContainerStyle}
          style={[containerStyle, style]}
          {...props}>
          {children}
        </ScrollView>
      ) : (
        <View style={[containerStyle, style]}>{children}</View>
      )}
    </SafeAreaView>
  );
};

export default ScreenWrapper;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
});
