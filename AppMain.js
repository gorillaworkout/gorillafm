import React, { Component } from 'react';
// import { SafeAreaView } from 'react-native';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
  } from 'react-native';
  import AuthStackRoot from './src/navigation/AuthStackRoot'
  import {NavigationContainer} from '@react-navigation/native'

const AppMain=()=>{
    return (
        <>
          <NavigationContainer>
              <AuthStackRoot/>
          </NavigationContainer>
          {/* <SafeAreaView>
              <Text>ASd</Text>
          </SafeAreaView> */}
        </>
    )
}

export default AppMain