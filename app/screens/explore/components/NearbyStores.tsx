import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {colors} from '../../../config';
import {RowContainer, Text} from '../../../components';
import {useNavigation} from '@react-navigation/native';
import {ExploreStackParamList} from '../../../navigation/ExploreStack';

import {IStore} from '../../../utils/types';
import {getStores} from '../../../apis/stores';

const NearbyStores = () => {
  const [stores, setStores] = useState<Array<IStore>>([]);

  const navigation =
    useNavigation<
      NativeStackNavigationProp<ExploreStackParamList, 'MedicalStore'>
    >();

  const handlePress = (storeId: string) => {
    navigation.navigate('MedicalStore', {
      _id: storeId,
    });
  };

  const fetchNearByStores = () => {
    getStores().then(response => {
      if (response) {
        setStores(response);
      }
    });
  };

  useEffect(() => {
    fetchNearByStores();
    return () => {
      setStores([]);
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text style={{fontSize: 14, marginBottom: 2}}>Nearby medical stores</Text>
      <ScrollView
        contentContainerStyle={{backgroundColor: 'white'}}
        style={{flex: 1}}>
        {stores.map(store => (
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => {
              handlePress(store.id);
            }}
            style={styles.card}
            key={store.id.toString()}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View style={styles.cover}>
                <Image
                  source={{
                    uri: store.cover_image,
                  }}
                  style={{width: '100%', height: '100%'}}
                />
              </View>
              <View style={{flex: 1, paddingLeft: 8}}>
                <Text style={{fontSize: 15, marginBottom: 8}}>
                  {store?.name}
                </Text>

                <Text style={{fontSize: 13, fontWeight: '300'}}>
                  25-35 mins {'\u25CF'} 2km away
                </Text>
                <Text
                  style={{
                    fontSize: 13,
                    fontWeight: '400',
                    marginBottom: 4,
                    color: colors.gray.dark,
                  }}>
                  6346, City Square, Kampala
                </Text>

                <RowContainer style={{marginTop: 4}}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Ionicons
                      name="ios-compass-outline"
                      size={14}
                      color={colors.accent}
                    />
                    <Text
                      style={{
                        fontSize: 13,
                        marginLeft: 4,
                        color: colors.gray.dark,
                      }}>
                      Live tracking
                    </Text>
                  </View>
                  {/* <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <View style={styles.dot} />
                    <Text style={{fontSize: 14, marginLeft: 8}}>Open</Text>
                  </View> */}
                </RowContainer>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default NearbyStores;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: colors.white,
  },
  card: {
    width: '100%',
    // height: 100,
    backgroundColor: colors.white,
    marginBottom: 8,
    borderRadius: 4,
    paddingVertical: 8,
    elevation: 2,
    paddingRight: 4,
  },
  cover: {
    borderRadius: 4,
    width: 90,
    height: 90,
    marginBottom: 4,
    overflow: 'hidden',
  },
  dot: {
    width: 6,
    height: 6,
    backgroundColor: '#40EC31',
    borderRadius: 12,
  },
});
