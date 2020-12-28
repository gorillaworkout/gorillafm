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


const App = () => {
  return (
    <>
     <View>
      <AppMain/> 
     </View> 
     {/* <View>
       <SafeAreaView>
        <Text>
          APP JS
        </Text>

       </SafeAreaView>
     </View> */}
    </>
  );
};



export default App;
