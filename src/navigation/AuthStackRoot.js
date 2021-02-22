import React, { Component } from 'react';
import { createStackNavigator} from '@react-navigation/stack'
import OpeningScreen from './../screen/Opening'
import Login from './../screen/Login/Login'
import Home from './../screen/Home/Home'
import Profile from './../screen/Profile/Profile'

const Stack=createStackNavigator()

const AuthStackRoot=()=>{
    return (
        <>
            <Stack.Navigator headerMode='None'>
                <Stack.Screen name='Opening' component={OpeningScreen}/>
                {/* <Stack.Screen name='Home' component={Home}/> */}
                <Stack.Screen name='Login' component={Login}/>
            </Stack.Navigator>
            {/* <OpeningScreen/> */}
        </>
    )
}


export default AuthStackRoot