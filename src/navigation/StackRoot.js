import React, { Component } from 'react';
import {createStackNavigator} from '@react-navigation/stack'
import TabRoot from './../navigation/TabRoot'
import Profile from './../screen/Profile/Profile'
import Moojol from './../screen/Moojol/Moojol'
import Playlist from './../screen/Playlist/Playlist'
import Play from './../screen/Play/Play'
const Stack = createStackNavigator()

const StackRoot=()=>{
    return (
        <Stack.Navigator headerMode='none'>
            <Stack.Screen name='TabRoot' component={TabRoot}/>
            <Stack.Screen name='Profile' component={Profile}/>
            <Stack.Screen name='Moojol' component={Moojol}/>
            <Stack.Screen name='Playlist' component={Playlist}/>
            <Stack.Screen name='PlayPage' component={Play}/>
        </Stack.Navigator>
    )
}

export default StackRoot