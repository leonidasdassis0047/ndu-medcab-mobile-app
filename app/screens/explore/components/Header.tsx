import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

import Ionicons from 'react-native-vector-icons/Ionicons';

import {RowContainer} from '../../../components';
import {colors, fonts} from '../../../config';
import useAuth from '../../../hooks/useAuth';

type Props = {
  location?: {
    latitude: number;
    longitude: number;
  };
};

const Header: React.FC<Props> = ({location}) => {
  const auth = useAuth();

  return (
    <RowContainer
      style={{justifyContent: 'space-between', alignItems: 'center'}}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Ionicons
          name="ios-location-outline"
          size={14}
          style={{backgroundColor: colors.white}}
        />
        <Text style={{fontSize: 14, marginLeft: 4}}>
          {location?.latitude.toPrecision(4)}{' '}
          {location?.longitude.toPrecision(4)}
        </Text>
      </View>
      <Text style={{fontFamily: fonts.bold}}>{auth.user.username}</Text>
      <View style={styles.avatar}>
        <Image
          style={{width: '100%', height: '100%'}}
          resizeMode="cover"
          source={{
            uri: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60',
          }}
        />
      </View>
    </RowContainer>
  );
};

export default Header;

const styles = StyleSheet.create({
  avatar: {
    height: 36,
    width: 36,
    borderRadius: 60,
    backgroundColor: colors.placeholder,
    marginVertical: 8,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
});
