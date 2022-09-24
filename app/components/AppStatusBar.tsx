import React from 'react';
import {StatusBar} from 'react-native';

import {colors} from '../config';

type Props = {
  mode: 'light' | 'dark';
};

const AppStatusBar = ({mode = 'light'}: Props) => {
  return (
    <StatusBar
      backgroundColor={mode === 'dark' ? colors.gray.light : colors.white}
      barStyle={mode === 'dark' ? 'light-content' : 'dark-content'}
    />
  );
};

export default AppStatusBar;
