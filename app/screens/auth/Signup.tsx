import React from 'react';
import {Keyboard, StyleSheet} from 'react-native';

import {Formik} from 'formik';
import * as Yup from 'yup';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {colors, fonts} from '../../config';
import {Button, ScreenWrapper, Text, TextInput} from '../../components';
import {ErrorMessage} from '../../components/forms';
import {AuthStackParamList} from '../../navigation/AuthNavigation';

import authApis from '../../apis/auth';
import useApi from '../../hooks/useApi';
import useAuth from '../../hooks/useAuth';

type Props = NativeStackScreenProps<AuthStackParamList, 'SignUp'>;

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email address'),
  password: Yup.string().required().label('Password'),
  username: Yup.string().required().label('Username'),
  phone: Yup.string().required().max(13).label('Phone number'),
});

type UserInfo = {
  email: string;
  password: string;
  username: string;
  phone: string;
};

const Signup: React.FC<Props> = ({navigation}) => {
  const [signUpError, setSignUpError] = React.useState('');
  const signUpApi = useApi(authApis.signUp);
  const signInApi = useApi(authApis.signIn);
  const auth = useAuth();

  const handleSignup = async ({email, username, password, phone}: UserInfo) => {
    Keyboard.dismiss();
    setSignUpError('');

    let response = await signUpApi.request({email, username, password, phone});
    if (!response.ok) {
      setSignUpError(response.data.message);
      return;
    }

    // log user in
    response = await signInApi.request({email, password});
    if (!response.ok) {
      setSignUpError(response.data.message);
      return;
    }
    await auth.signIn(response.data);
  };

  return (
    <ScreenWrapper style={styles.screen}>
      {signUpError && (
        <ErrorMessage
          error={signUpError}
          visible={Boolean(signUpError)}
          style={{alignSelf: 'center'}}
        />
      )}
      <Formik
        initialValues={{
          email: '',
          password: '',
          username: '',
          phone: '',
        }}
        onSubmit={handleSignup}
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
              autoCorrect={false}
              onChangeText={handleChange('username')}
              label="Username"
              placeholder="Username"
            />
            <ErrorMessage
              error={errors.username as string}
              visible={Boolean(touched.username)}
            />

            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              onChangeText={handleChange('phone')}
              label="Phone number"
              placeholder="Phone number"
              keyboardType="phone-pad"
            />
            <ErrorMessage
              error={errors.phone as string}
              visible={Boolean(touched.phone)}
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

      <Text style={{marginVertical: 16}}>
        Already have an account?
        <Text
          onPress={() => navigation.navigate('SignIn')}
          style={[styles.linkText]}>
          {' '}
          Sign in
        </Text>
      </Text>
    </ScreenWrapper>
  );
};

export default Signup;

const styles = StyleSheet.create({
  screen: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 8,
  },

  linkText: {
    color: colors.primary,
    fontFamily: fonts.semiBold,
    marginTop: 16,
    textTransform: 'capitalize',
  },
});
