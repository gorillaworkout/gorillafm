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
  import StackRoot from './src/navigation/StackRoot'
  import {NavigationContainer} from '@react-navigation/native'
  import {useSelector,useDispatch} from 'react-redux'


const AppMain=()=>{
    const Auth = useSelector(state=>state.Auth)

    return (
        <>
          <NavigationContainer headerMode='none '>
              
              {
                  Auth.isLogin?
                  <StackRoot/>
                  :
                  <AuthStackRoot/>
              }
              
          </NavigationContainer>
         
        </>
    )
}

export default AppMain