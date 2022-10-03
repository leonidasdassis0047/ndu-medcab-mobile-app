import React from 'react';
import {StyleSheet, View} from 'react-native';

import {Text, TextInput} from '../../../components';
import {fonts} from '../../../config';

const ShippingSection: React.FC<{user: any}> = ({user}) => {
  const [email, setEmail] = React.useState<string>(user.email);
  const [firstName, setFirstName] = React.useState<string>(user.first_name);
  const [lastName, setLastName] = React.useState<string>(user.last_name);

  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.instruction}>Contact Information</Text>
      <TextInput
        placeholder="First name"
        value={firstName}
        onChangeText={setFirstName}
      />
      <TextInput
        placeholder="Last name"
        value={lastName}
        onChangeText={setLastName}
      />
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} />
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
