import {Image, StyleSheet, View} from 'react-native';
import React from 'react';

import {AuthStackParamList} from '../../navigation/AuthNavigation';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {Button, ScreenWrapper, Text} from '../../components';
import {colors} from '../../config/';

type Props = NativeStackScreenProps<AuthStackParamList, 'Welcome'>;

const Welcome: React.FC<Props> = ({navigation}) => {
  return (
    <ScreenWrapper style={styles.container}>
      {/* logo container */}
      <View style={{flex: 1.4, alignItems: 'center', justifyContent: 'center'}}>
        <Image
          source={require('../../assets/images/welcoming-doctors.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      <View style={{flex: 1.6, width: '100%', paddingHorizontal: 8}}>
        {/* info text */}
        <View style={styles.infoTextContainer}>
          <Text style={styles.infoTextTitle}>Welcome to MedCab</Text>
          <Text
            style={{
              fontWeight: '400',
              fontSize: 15,
              textAlign: 'center',
            }}>
            Delivering to more than expectation, cause life matters more than
            anything
          </Text>
        </View>

        {/* buttons */}
        <View style={{marginVertical: 16}}>
          <Button
            text="signup with email"
            onPress={() => {
              navigation.navigate('SignUp');
            }}
            activeOpacity={0.9}
            style={{marginBottom: 8}}
          />

          <Button
            text="continue with google"
            onPress={() => {
              console.log('google login');
            }}
            style={{
              backgroundColor: colors.white,
              elevation: 2,
              marginVertical: 8,
            }}
            textStyle={{color: colors.text, fontSize: 14}}
          />

          {/* <Button
            text="continue with facebook"
            onPress={() => {
              console.log('fb login');
            }}
            style={{
              backgroundColor: colors.white,
              elevation: 2,
              marginVertical: 8,
            }}
            textStyle={{color: colors.text, fontSize: 14}}
          /> */}
        </View>

        {/* login link */}
        <Text
          onPress={() => navigation.navigate('SignIn')}
          style={styles.loginText}>
          Login now
        </Text>
      </View>
    </ScreenWrapper>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {alignItems: 'center'},
  logo: {width: 220, marginVertical: 4},
  infoTextContainer: {alignItems: 'center', marginBottom: 16, width: '100%'},
  infoTextTitle: {fontWeight: '600', fontSize: 20, marginBottom: 8},
  loginText: {
    textAlign: 'center',
    color: colors.primary,
    fontWeight: '700',
    fontSize: 16,
    textTransform: 'uppercase',
  },
});
