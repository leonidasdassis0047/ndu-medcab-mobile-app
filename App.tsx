import 'react-native-gesture-handler';

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {AuthContext} from './app/context/AuthContext';
import authStorage from './app/utils/authStorage';
import {AppLoading, AppStatusBar, OfflineNotice} from './app/components';
import AuthNavigation from './app/navigation/AuthNavigation';

import {store} from './app/stores';
import {Provider} from 'react-redux';
import {MainNavigation} from './app/navigation';

const App = () => {
  const [user, setUser] = React.useState<any | null>(null);
  const [isReady, setIsReady] = React.useState<boolean>(false);

  const restoreToken = async () => {
    const restoredUser = await authStorage.getUser();
    if (!restoredUser) {
      return;
    }
    setUser(restoredUser);
  };

  if (!isReady) {
    return (
      <AppLoading onFinish={() => setIsReady(true)} startAsync={restoreToken} />
    );
  }

  return (
    <AuthContext.Provider value={{user, setUser}}>
      <Provider store={store}>
        <NavigationContainer>
          <React.Fragment>
            <AppStatusBar mode="light" />
            <OfflineNotice />
            {user ? <MainNavigation /> : <AuthNavigation />}
          </React.Fragment>
        </NavigationContainer>
      </Provider>
    </AuthContext.Provider>
  );
};

export default App;
