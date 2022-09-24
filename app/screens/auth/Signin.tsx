import {Image, Keyboard, StyleSheet, View} from 'react-native';
import React from 'react';

import {Formik} from 'formik';
import * as Yup from 'yup';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {
  ActivityIndicator,
  Button,
  ScreenWrapper,
  Text,
  TextInput,
} from '../../components';
import {colors, fonts} from '../../config';
import {ErrorMessage} from '../../components/forms';
import {AuthStackParamList} from '../../navigation/AuthNavigation';

import authApis from '../../apis/auth';
import useAuth from '../../hooks/useAuth';
import {useApi} from '../../hooks';

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email address'),
  password: Yup.string().required().label('Password'),
});

type Props = NativeStackScreenProps<AuthStackParamList, 'SignIn'>;

type SigninDetails = {
  email: string;
  password: string;
};

const Signin: React.FC<Props> = ({navigation}) => {
  const [errorSigningIn, setErrorSigningIn] = React.useState('');
  const signInApi = useApi<string>(authApis.signIn);
  const auth = useAuth();

  const handleSubmitForm = async ({email, password}: SigninDetails) => {
    Keyboard.dismiss();
    setErrorSigningIn('');

    const response = await signInApi.request({email, password});
    if (!response.ok) {
      setErrorSigningIn(response.data.message);
      return;
    }
    await auth.signIn(response.data);
  };

  return (
    <React.Fragment>
      <ActivityIndicator visible={signInApi.isLoading} />
      <ScreenWrapper style={styles.screen}>
        <View style={{marginVertical: 16}}>
          <Image
            source={require('../../assets/images/logo.png')}
            style={{width: 70, height: 70}}
            resizeMode="contain"
          />
        </View>

        <View style={styles.infoTextContainer}>
          <Text style={styles.infoTextTitle}>Sign into your account</Text>
        </View>

        {errorSigningIn && (
          <ErrorMessage
            error={errorSigningIn}
            visible={Boolean(errorSigningIn)}
            style={{alignSelf: 'center'}}
          />
        )}

        <Formik
          initialValues={{email: '', password: ''}}
          onSubmit={handleSubmitForm}
          validationSchema={validationSchema}>
          {({handleChange, handleSubmit, errors, touched}) => (
            <React.Fragment>
              <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={handleChange('email')}
                keyboardType="email-address"
                label="Email"
                placeholder="Email address"
              />
              <ErrorMessage
                error={errors.email as string}
                visible={Boolean(touched.email)}
              />
              <TextInput
                autoCapitalize="none"
                keyboardType="default"
                label="Password"
                onChangeText={handleChange('password')}
                placeholder="Password"
                secureTextEntry
              />
              <ErrorMessage
                error={errors.password as string}
                visible={Boolean(touched.password)}
              />
              <Button text="Continue" onPress={handleSubmit} />
            </React.Fragment>
          )}
        </Formik>

        <Text
          onPress={() => navigation.navigate('ForgotPassword')}
          style={[
            styles.linkText,
            {alignSelf: 'flex-end', paddingHorizontal: 8},
          ]}>
          forgot Password?
        </Text>

        <Text style={{marginVertical: 16}}>
          Don't have an account?
          <Text
            onPress={() => navigation.navigate('SignUp')}
            style={[styles.linkText]}>
            {' '}
            Sign up
          </Text>
        </Text>
      </ScreenWrapper>
    </React.Fragment>
  );
};

export default Signin;

const styles = StyleSheet.create({
  screen: {
    alignItems: 'center',
    paddingHorizontal: 8,
  },
  infoTextContainer: {alignItems: 'center', marginBottom: 16, width: '100%'},

  infoTextTitle: {fontSize: 20, marginBottom: 8, fontFamily: fonts.semiBold},

  linkText: {
    color: colors.primary,
    fontFamily: fonts.semiBold,
    marginTop: 16,
    textTransform: 'capitalize',
  },
});
