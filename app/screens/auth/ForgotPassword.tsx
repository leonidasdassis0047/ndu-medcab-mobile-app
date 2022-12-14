import {Image, StyleSheet, View} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
// import VectorImage from 'react-native-vector-image';
import * as Yup from 'yup';
import {Formik} from 'formik';

import {colors, fonts} from '../../config/';
import {Button, ScreenWrapper, Text, TextInput} from '../../components';
import {AuthStackParamList} from '../../navigation/AuthNavigation';
import {ErrorMessage} from '../../components/forms';

type Props = NativeStackScreenProps<AuthStackParamList, 'ForgotPassword'>;

const ForgotPassword: React.FC<Props> = ({navigation}) => {
  const handleSubmitForgotPassword = (values: any) => {
    console.log(values);
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label('Email'),
  });

  return (
    <ScreenWrapper contentContainerStyle={styles.container} scrollable>
      {/* logo */}
      <View style={styles.logoContainer}>
        <Image
          source={require('../../assets/images/logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      {/* info text */}
      <View style={styles.infoTextContainer}>
        <Text style={styles.infoTextTitle}>Forgot Password</Text>
        <Text
          style={{
            fontSize: 15,
            textAlign: 'center',
          }}>
          Please enter your email address below to receive your password reset
          instructions
        </Text>
      </View>

      <Formik
        initialValues={{email: ''}}
        onSubmit={handleSubmitForgotPassword}
        validationSchema={validationSchema}>
        {({handleChange, handleSubmit, errors}) => (
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
              visible={Boolean(errors.email)}
            />
            <Button text="Continue" onPress={handleSubmit} />
          </React.Fragment>
        )}
      </Formik>

      {/* cancel link */}
      <Text
        onPress={() => navigation.navigate('SignIn')}
        style={styles.cancelText}>
        cancel
      </Text>
    </ScreenWrapper>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  container: {
    paddingTop: 16,
    paddingHorizontal: 8,
    alignItems: 'center',
  },

  logo: {width: 60, height: 60},
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    width: '100%',
    marginVertical: 8,
  },

  input: {
    width: '100%',
    padding: 8,
    color: colors.text,
    marginVertical: 8,
    borderWidth: 0,
    borderBottomWidth: 1,
    borderColor: colors.placeholder,
    backgroundColor: colors.white,
  },

  inputContainer: {
    paddingVertical: 8,
    marginTop: 8,
    width: '100%',
  },

  infoTextContainer: {alignItems: 'center', marginBottom: 16, width: '100%'},

  infoTextTitle: {fontSize: 20, marginBottom: 8, fontFamily: fonts.medium},

  cancelText: {
    color: colors.primary,
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
    textTransform: 'uppercase',
    marginTop: 16,
    paddingHorizontal: 16,
  },

  error: {color: colors.error, fontWeight: '400', marginTop: 4},
});
