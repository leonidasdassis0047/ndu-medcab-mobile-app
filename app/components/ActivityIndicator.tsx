import React from 'react';
import {StyleSheet, View} from 'react-native';
import LottieView from 'lottie-react-native';

import colors from '../config/colors';

const ActivityIndicator: React.FC<{visible: boolean}> = ({visible = false}) => {
  if (!visible) {
    return null;
  }

  return (
    <View style={styles.container}>
      <LottieView
        source={require('../assets/animations/loading.json')}
        autoPlay
        loop
      />
    </View>
  );
};

export default ActivityIndicator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.8,
    position: 'absolute',
    zIndex: 1,
  },
});
