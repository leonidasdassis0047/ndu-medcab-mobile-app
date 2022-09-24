import React from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import LottieView from 'lottie-react-native';

import colors from '../config/colors';
import {AppStatusBar, ScreenWrapper, Text} from '.';
import {fonts} from '../config';

type Props = {
  startAsync: () => Promise<void>;
  onFinish: () => void;
};

const AppLoading: React.FC<Props> = ({onFinish, startAsync}) => {
  const handleStartAsync = async () => {
    try {
      setTimeout(async () => {
        await startAsync();
        onFinish();
      }, 3000);
    } catch (error: any) {
      console.log(error.message);
    }
  };

  React.useEffect(() => {
    handleStartAsync();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ScreenWrapper style={styles.screen}>
      <AppStatusBar mode="light" />
      <LottieView
        source={require('../assets/animations/loading.json')}
        autoPlay
        loop
      />

      <Text style={styles.catchPhrase}>
        Delivering your medication at your request
      </Text>
    </ScreenWrapper>
  );
};

export default AppLoading;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  catchPhrase: {
    fontSize: 18,
    fontFamily: fonts.bold,
    color: colors.primary,
    top: 60,
    textAlign: 'center',
  },
});
