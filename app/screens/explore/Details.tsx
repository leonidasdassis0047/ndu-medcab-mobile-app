import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {Icon, ScreenWrapper, Text} from '../../components';
import {colors, fonts} from '../../config';
import {ExploreStackParamList} from '../../navigation/ExploreStack';

type Props = NativeStackScreenProps<ExploreStackParamList, 'Details'>;

const Details: React.FC<Props> = ({navigation, route}) => {
  const item = route.params.item;
  const items = item.items;

  return (
    <ScreenWrapper style={styles.screen}>
      <View style={{flexDirection: 'row', alignItems: 'center', width: '100%'}}>
        <Icon
          name="ios-chevron-back"
          backgroundColor={colors.transparent}
          color={colors.primary}
          onPress={() => {
            navigation.goBack();
          }}
        />
        <Text style={styles.title}>{item.title}</Text>
      </View>
      <ScrollView>
        {items.map(i => {
          return (
            <View key={i.id} style={{marginVertical: 4, padding: 8}}>
              <Text
                onPress={() => {
                  console.log(i.title);
                }}
                style={{
                  width: '100%',
                  padding: 4,
                  fontSize: 16,
                  color: colors.text,
                }}>
                {i.title}
              </Text>
            </View>
          );
        })}
      </ScrollView>
    </ScreenWrapper>
  );
};

export default Details;

const styles = StyleSheet.create({
  screen: {
    paddingHorizontal: 4,
  },
  title: {
    fontSize: 18,
    fontFamily: fonts.semiBold,
    textAlign: 'center',
    color: colors.black,
  },
});
