import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Modal,
  Button,
  FlatList,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {ScreenWrapper, Text} from '.';
import {colors} from '../config/';
import PickerItem from './PickerItem';

type Props = {
  icon: string;
  items: Array<any>;
  numberOfColumns?: number;
  onSelectItem: (item: any) => void;
  selectedItem: any;
  PickerItemComponent?: any;
  placeholder?: string;
  width?: string | number;
};

const AppPicker: React.FC<Props> = ({
  icon,
  items,
  numberOfColumns = 1,
  onSelectItem,
  PickerItemComponent = PickerItem,
  placeholder,
  selectedItem,
  width = '100%',
}) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={[styles.container, {width}]}>
          {icon && (
            <Ionicons
              name={icon}
              size={20}
              color={colors.gray.medium}
              style={styles.icon}
            />
          )}
          {selectedItem ? (
            <Text style={styles.text}>{selectedItem.label}</Text>
          ) : (
            <Text style={styles.placeholder}>{placeholder}</Text>
          )}

          <Ionicons name="chevron-down" size={20} color={colors.gray.medium} />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType="slide">
        <ScreenWrapper>
          <Button title="Close" onPress={() => setModalVisible(false)} />
          <FlatList
            data={items}
            keyExtractor={item => item.value.toString()}
            numColumns={numberOfColumns}
            renderItem={({item}) => (
              <PickerItemComponent
                item={item}
                label={item.label}
                onPress={() => {
                  setModalVisible(false);
                  onSelectItem(item);
                }}
              />
            )}
          />
        </ScreenWrapper>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.gray.light,
    borderRadius: 25,
    flexDirection: 'row',
    padding: 15,
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
  },
  placeholder: {
    color: colors.gray.medium,
    flex: 1,
  },
  text: {
    flex: 1,
  },
});

export default AppPicker;
