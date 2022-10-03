import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

import {ScreenWrapper, Text} from '../../components';
import Header from './components/Header';
import NearbyStores from './components/NearbyStores';
import {colors} from '../../config/';

import {useLocation} from '../../hooks/';
import SearchStores from './components/SearchStores';
import ExplorationCard from './components/ExplorationCard';

import data from '../../assets/data/db';

const Explore = () => {
  const {location} = useLocation();

  return (
    <ScreenWrapper
      contentContainerStyle={styles.container}
      scrollable
      showsVerticalScrollIndicator={false}>
      {/* Profile management and user details */}
      <Header location={location} />

      {/* Discounting Cards */}
      <View style={styles.bannerContainer}>
        <Image
          source={{
            uri: 'https://res.cloudinary.com/leonidasdassis0047/image/upload/v1661269911/medcab/stores/6304f795ad2824852c4634ce_cover_photo.jpg',
          }}
          style={{width: '100%', height: '100%'}}
          resizeMode="cover"
        />
      </View>

      {/* Search and filtering */}
      <SearchStores />

      {/* quick choose */}
      <View style={styles.explorationCardsContainer}>
        {data.categories.map((item: {id: string; title: string}) => {
          return <ExplorationCard key={item.id} item={item} />;
        })}
      </View>

      {/* Categorizations of Drugs and medicines. */}
      {/* <Categories description="Some popular categories for the drugs" /> */}

      {/* Popular and Top medicines and drugs */}
      {/* <Drugs /> */}

      {/* Recommended Pharmacies and Drug stores */}
      {/* <RecommendedStores /> */}

      {/* Nearby Pharmacies and Drug stores */}
      <NearbyStores />
    </ScreenWrapper>
  );
};

export default Explore;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 8,
  },
  avatar: {
    height: 36,
    width: 36,
    borderRadius: 60,
    backgroundColor: colors.placeholder,
    marginVertical: 8,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },

  bannerContainer: {
    height: 140,
    backgroundColor: colors.background,
    width: '100%',
    marginBottom: 4,
    borderRadius: 4,
    overflow: 'hidden',
    // opacity: 0.9,
  },

  explorationCardsContainer: {
    width: '100%',
    height: 100,
    marginVertical: 4,
    paddingVertical: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
