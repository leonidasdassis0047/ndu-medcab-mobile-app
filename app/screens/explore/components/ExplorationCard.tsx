import {TouchableOpacity, StyleSheet, View} from 'react-native';
import React from 'react';
import {Text} from '../../../components';
import {colors} from '../../../config';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ExploreStackParamList} from '../../../navigation/ExploreStack';
import {useNavigation} from '@react-navigation/native';

type Props = {
  item: {
    id: string;
    title: string;
  };
};

const ExplorationCard: React.FC<Props> = ({item}) => {
  const navigation =
    useNavigation<
      NativeStackNavigationProp<ExploreStackParamList, 'Details'>
    >();

  return (
    <TouchableOpacity
      key={item.id}
      style={styles.container}
      onPress={() => {
        navigation.navigate('Details', {item});
      }}>
      <Text style={styles.title}>{item?.title}</Text>
      <View
        style={{
          width: '80%',
          height: 1,
          backgroundColor: colors.gray.medium,
          marginVertical: 4,
        }}
      />
    </TouchableOpacity>
  );
};

export default ExplorationCard;

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: '94%',
    backgroundColor: colors.gray.light,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
    padding: 2,
  },
  title: {
    textAlign: 'center',
  },
});
