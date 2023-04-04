/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';

import {store} from './store/store';
import {Provider} from 'react-redux';
import AppNavigator from './Navigation/AppNavigator';
import AsyncStorage from '@react-native-async-storage/async-storage';

//AsyncStorage.clear();

const App = () => {
  return (

    <Provider store={store}>
         
      <AppNavigator />  
       
    </Provider>
  )
}

export default App;
