import {StatusBar, StyleSheet, View} from 'react-native';
import React from 'react';

import {ScreenWrapper, Text} from '../../components';
import Avatar from './components/Avatar';
import ListItem from './components/ListItem';
import {colors} from '../../config';
import useAuth from '../../hooks/useAuth';

const Profile = () => {
  const {user, signOut} = useAuth();

  return (
    <ScreenWrapper>
      <StatusBar barStyle={'dark-content'} backgroundColor={colors.white} />
      <View style={styles.header}>
        <Avatar size={80} />
        <Text style={{textAlign: 'center'}}>{user.username}</Text>
        <Text style={{fontSize: 15}}>{user.email}</Text>
      </View>

      <View style={{flex: 1, marginTop: 16}}>
        <ListItem title="Profile" />
        <ListItem title="Change Password" />
        <ListItem title="Payment Settings" />
        <ListItem title="About Us" />
        <ListItem title="Sign Out" onPress={() => signOut()} />
      </View>
    </ScreenWrapper>
  );
};

export default Profile;

const styles = StyleSheet.create({
  header: {
    width: '100%',
    paddingHorizontal: 8,
    alignItems: 'center',
    marginBottom: 8,
  },
});
