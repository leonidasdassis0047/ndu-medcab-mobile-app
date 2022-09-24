import React from 'react';
import {View, StyleSheet} from 'react-native';
import {useNetInfo} from '@react-native-community/netinfo';

import {Text} from '.';
import {colors} from '../config';

type Props = {};

const OfflineNotice: React.FC<Props> = () => {
  const netInfo = useNetInfo();

  if (netInfo.type !== 'unknown' && netInfo.isInternetReachable === false) {
    console.log(netInfo);
    return (
      <View style={styles.container}>
        <Text style={styles.text}>No Internet Connection</Text>
      </View>
    );
  }

  return null;
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.primary,
    height: 50,
    justifyContent: 'center',
    position: 'absolute',
    width: '100%',
    zIndex: 1,
  },
  text: {
    color: colors.white,
  },
});

export default OfflineNotice;
