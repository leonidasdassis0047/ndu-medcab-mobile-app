import {
  Dimensions,
  Image,
  Pressable,
  StatusBar,
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {FlatGrid} from 'react-native-super-grid';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {ExploreStackParamList} from '../../navigation/ExploreStack';
import {RowContainer, ScreenWrapper, Text} from '../../components';
import {colors} from '../../config/';

// import SearchStores from '../../components/explore/SearchStores';
import Categories from './components/Categories';
import Iconicons from 'react-native-vector-icons/Ionicons';
import {IProduct, IStore} from '../../utils/types';

import {useDispatch} from 'react-redux';
import {getStore} from '../../apis/stores';

import {addItemToCart} from '../../stores/cart/cartSlice';

type Props = NativeStackScreenProps<ExploreStackParamList, 'MedicalStore'> & {};

const {width: SCREEN_WIDTH} = Dimensions.get('window');

const MedicalStore: React.FC<Props> = ({route}) => {
  const [store, setStore] = useState<IStore | null>(null);
  const [inventory, setInventory] = useState<Array<IProduct>>([]);

  const {_id: storeId} = route.params;

  const fetchStoreDetails = async () => {
    const result = await getStore(storeId);

    if (result) {
      setStore(result as unknown as IStore);
      setInventory(result.inventory);
    }
  };

  useEffect(() => {
    fetchStoreDetails();

    return () => {
      setStore(null);
      setInventory([]);
    };
  }, []);

  return (
    <ScreenWrapper>
      <StatusBar translucent backgroundColor={'transparent'} />
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          resizeMode="cover"
          source={{uri: store?.cover_image}}
        />
      </View>
      <View style={{paddingHorizontal: 8}}>
        {/* <SearchStores placeholder="search drugs" /> */}

        {/* Store details */}
        <View>
          <Text style={{fontSize: 18, marginBottom: 8}}>{store?.name}</Text>
          <RowContainer style={{justifyContent: 'flex-start'}}>
            <Iconicons
              name="ios-location-outline"
              size={14}
              color={colors.accent}
            />
            <Text style={{fontSize: 14, fontWeight: '400', marginLeft: 4}}>
              Mengo, Kampala
            </Text>
          </RowContainer>

          <Text style={{fontSize: 14, fontWeight: '400'}}>
            {store?.description}
          </Text>
        </View>

        {/* categories */}
        <Categories containerStyle={{height: 44}} />
      </View>

      {/* store drugs offered */}
      <View style={{flex: 1, backgroundColor: colors.background}}>
        <FlatGrid
          itemDimension={SCREEN_WIDTH * 0.4}
          data={inventory}
          renderItem={({item}: {item: IProduct}) => <ProductCard item={item} />}
          keyExtractor={item => item.id.toString()}
          spacing={10}
          style={{flex: 1}}
          showsVerticalScrollIndicator={false}
          numColumns={2}
        />
      </View>
    </ScreenWrapper>
  );
};

export default MedicalStore;

type CardProps = {
  item: IProduct;
};

const ProductCard: React.FC<CardProps> = ({item}) => {
  const navigation = useNavigation<NavigationProp<ExploreStackParamList>>();
  const dispatch = useDispatch();

  const addToCartHandler = (product: any) => {
    dispatch(addItemToCart(product));
  };

  const addToFavorites = () => {};

  const viewMedicine = (id: string) => {
    navigation.navigate('MedicineDetails', {_id: id});
  };

  return (
    <View style={styles.card}>
      <Pressable onPress={() => viewMedicine(item.id)} style={styles.cardImage}>
        <Image
          source={{uri: item.image}}
          style={styles.image}
          resizeMode="cover"
        />
      </Pressable>
      <View style={styles.cardDetails}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 4,
          }}>
          <Icon
            name="ios-cart-outline"
            color={colors.primary}
            onPress={() =>
              addToCartHandler({
                id: item.id,
                name: item.name,
                image: item.image,
                price: item.actual_price,
                store: item.store,
              })
            }
          />
          <Icon
            name="ios-heart-outline"
            color={colors.error}
            onPress={addToFavorites}
          />
          <Icon
            name="ios-arrow-forward"
            color={colors.primary}
            onPress={() => viewMedicine(item.id)}
          />
        </View>
        <Text
          style={{
            fontSize: 14,
            color: colors.primary,
          }}>
          {item.name}
        </Text>
        <Text
          style={{
            fontSize: 14,
          }}>{`${item.actual_price} ${item.pricing.currency}`}</Text>
      </View>
    </View>
  );
};

const Icon = ({
  color,
  name,
  onPress,
  size,
  style,
}: {
  color?: string;
  name: string;
  onPress: () => void;
  size?: number;
  style?: StyleProp<ViewStyle>;
}) => {
  const ICON_SIZE = size || 30;
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={[
        {
          padding: 4,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: colors.gray.light,
          borderRadius: ICON_SIZE,
          width: ICON_SIZE,
          height: ICON_SIZE,
        },
        style,
      ]}>
      <Ionicons
        color={color || colors.text}
        name={name}
        size={ICON_SIZE * 0.5}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    height: 220,
    width: '100%',
    backgroundColor: colors.white,
  },
  image: {
    height: '100%',
    width: '100%',
  },

  // ***** card styles *****
  card: {
    backgroundColor: colors.white,
    width: '100%',
    height: 220,
    borderRadius: 0,
    elevation: 2,
    overflow: 'hidden',
  },
  cardImage: {
    height: '50%',
    width: '100%',
  },
  cardDetails: {
    paddingHorizontal: 4,
    flex: 1,
    justifyContent: 'space-around',
  },
});
