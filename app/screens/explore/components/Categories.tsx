import React, {useState} from 'react';
import {
  ScrollView,
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {colors} from '../../../config/';
import {Text} from '../../../components';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ExploreStackParamList} from '../../../navigation/ExploreStack';

type Props = {
  description?: string;
  containerStyle?: StyleProp<ViewStyle>;
};

const Categories: React.FC<Props> = ({description, containerStyle}) => {
  const [categories, setCategories] = useState([
    {_id: '5b1c0be0-e74a-4ce6-a224-63083330d77b', title: 'pain killers'},
    {_id: '41ee6fd1-9a5e-44e7-a813-ee885e287f69', title: 'anti-boitics'},
    {_id: '5dff1f4a-bd67-4482-96c2-296802438808', title: 'eyes & nose'},
    {_id: '92489be6-0e9d-4027-9947-fb09c27509cc', title: 'dental'},
    {_id: 'a0f5f9c9-64c7-478a-963f-3dd56ba6a97b', title: 'skin'},
    {_id: '52f3fe79-bbce-482b-9472-7c27255eed72', title: 'colds & flu'},
  ]);

  const navigation =
    useNavigation<
      NativeStackNavigationProp<ExploreStackParamList, 'CategoryDetails'>
    >();

  return (
    <View style={[styles.container, containerStyle]}>
      {description && (
        <Text style={{fontSize: 13, marginBottom: 4}}>{description}</Text>
      )}
      <ScrollView
        contentContainerStyle={{
          alignItems: 'center',
          backgroundColor: colors.background,
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{flex: 1}}>
        {categories.map(item => (
          <TouchableOpacity
            onPress={() => {
              console.log('pressed');
            }}
            style={styles.card}
            key={item._id.toString()}>
            <Text style={{fontSize: 14, fontWeight: '400'}}>{item.title}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  container: {
    height: 60,
    width: '100%',
    marginBottom: 8,
  },
  card: {
    width: 'auto',
    height: 30,
    backgroundColor: colors.white,
    marginRight: 4,
    borderRadius: 32,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 1,
    paddingHorizontal: 16,
  },
});
