import {StyleSheet, StatusBar, View} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {colors} from '../../config';
import {RowContainer, ScreenWrapper, Text} from '../../components';
import MessageListing from './components/MessageListing';

const Notification = () => {
  return (
    <>
      <ScreenWrapper style={{flex: 1}}>
        <StatusBar
          translucent={false}
          barStyle="dark-content"
          backgroundColor={colors.white}
        />
        <View style={styles.headerContainer}>
          <RowContainer
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'flex-start',
            }}>
            <Ionicons
              name="ios-arrow-back-sharp"
              size={20}
              color={colors.black}
            />
            <Text style={styles.headerText}>Notifications</Text>
          </RowContainer>
        </View>
        <View style={{flex: 1, paddingHorizontal: 8}}>
          <MessageListing />
        </View>
      </ScreenWrapper>
    </>
  );
};

export default Notification;

const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
    paddingVertical: 8,
    marginBottom: 4,
  },
  headerText: {
    fontSize: 18,
    fontWeight: '500',
    marginLeft: 4,
  },
  clear: {
    fontSize: 14,
    fontWeight: '400',
    alignSelf: 'flex-end',
    color: colors.primary,
  },
  messageContainer: {
    borderBottomWidth: 1,
    marginBottom: 4,
    borderBottomColor: '#EEE',
    height: 80,
    width: '100%',
    backgroundColor: '#FFF',
  },
});
