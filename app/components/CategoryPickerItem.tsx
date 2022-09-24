import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';

import {Icon, Text} from '.';

type Props = {
  item: any;
  onPress: () => void;
};

const CategoryPickerItem: React.FC<Props> = ({item, onPress}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <Icon
          backgroundColor={item.backgroundColor}
          name={item.icon}
          size={80}
        />
      </TouchableOpacity>
      <Text style={styles.label}>{item.label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 15,
    alignItems: 'center',
    width: '33%',
  },
  label: {
    marginTop: 5,
    textAlign: 'center',
  },
});

export default CategoryPickerItem;
