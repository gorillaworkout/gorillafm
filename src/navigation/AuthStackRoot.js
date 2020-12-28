import React, { Component } from 'react';
import { createStackNavigator} from '@react-navigation/stack'
import Opening from './../screen/Opening'
const Stack=createStackNavigator()

const AuthStackRoot=()=>{
    return (
        <>
            <Stack.Navigator headerMode='none'>
                <Stack.Screen name='Opening' component={Opening}/>
            </Stack.Navigator>
        </>
    )
}


export default AuthStackRoot