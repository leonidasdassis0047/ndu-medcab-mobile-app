import React from 'react';
import {StyleSheet, View} from 'react-native';

import {Text, TextInput} from '../../../components';
import {fonts} from '../../../config';

const ShippingSection = () => {
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.instruction}>Contact Information</Text>
      <TextInput placeholder="First name" />
      <TextInput placeholder="Last name" />
      <TextInput placeholder="Email" />
      <TextInput placeholder="Phone number" />

      <Text style={styles.instruction}>Shipping Address</Text>
      <TextInput placeholder="Address" />
      <TextInput placeholder="Landmark" />
    </View>
  );
};

export default ShippingSection;

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
  },
  instruction: {fontFamily: fonts.bold, marginBottom: 8},
});
