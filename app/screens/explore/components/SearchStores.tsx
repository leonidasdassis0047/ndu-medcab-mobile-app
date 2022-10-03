import {
  NativeSyntheticEvent,
  StyleProp,
  StyleSheet,
  TextInputProps,
  TextInputSubmitEditingEventData,
} from 'react-native';
import React, {useState} from 'react';
import {Text, TextInput} from '../../../components';
import {colors} from '../../../config/';
import axios from 'axios';

const API = 'https://api-medcab.herokuapp.com/api/stores/search';

type Props = {
  placeholder?: string;
  textInputStyle?: StyleProp<TextInputProps>;
};
const SearchStores: React.FC<Props> = ({
  placeholder = 'search medical stores',
  textInputStyle,
}) => {
  const [search, setSearch] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isSearch, setIsSearching] = useState<boolean>(false);

  const handleSearch = async (
    event: NativeSyntheticEvent<TextInputSubmitEditingEventData>,
  ) => {
    setError(null);
    try {
      const {data}: {data: any; status: number} = await axios.get(API, {
        params: {
          q: search,
        },
      });
      if (data?.status !== 200 && data?.error) {
        console.log(data?.message);
        setError(data?.message);
        return;
      }
      console.log(data);
    } catch (e: any) {
      console.log(e?.message);
    }
  };

  return (
    <>
      <TextInput
        placeholder={placeholder}
        containerStyle={styles.container}
        style={[styles.input, textInputStyle]}
        onChangeText={setSearch}
        returnKeyType="search"
        onSubmitEditing={handleSearch}
      />
      {error && <Text>{error}</Text>}
    </>
  );
};

export default SearchStores;

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: colors.white,
    marginBottom: 8,
    elevation: 2,
    borderWidth: 0,
  },
  input: {borderBottomWidth: 0, paddingBottom: 8, fontSize: 15},
});
