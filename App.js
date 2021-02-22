/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  
} from 'react-native';
import AppMain from './AppMain'
import {Provider} from 'react-redux' 
import {createStore,applyMiddleware} from 'redux'
import ReduxThunk from 'redux-thunk'
import Reducers from './src/redux/reducers'

const App = () => {
  const store = createStore(Reducers,{},applyMiddleware(ReduxThunk))
  return (
    <>
     <Provider store={store}>
       <AppMain/>
     </Provider>
    
    </>
  );
};



export default App;
