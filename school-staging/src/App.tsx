import {Provider} from 'react-redux';
import React from 'react';
import FlashMessage from 'react-native-flash-message';

import '@Themes';
import {store} from '@Store/configureStore';
import AppNavigator from '@Navigations/AppNavigator';
import Loading from '@Components/Loading/Loading';
import {getStatusBarHeight} from '@Utils/utils';

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigator />
      <Loading />
      <FlashMessage
        position={'bottom'}
        statusBarHeight={getStatusBarHeight()}
      />
    </Provider>
  );
}
