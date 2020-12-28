import React, { Component } from 'react';
import {createStackNavigator} from '@react-navigation/stack'

const Stack = createStackNavigator()

const StackRoot=()=>{
    return (
        <Stack.Navigator headerMode='none'>
            
        </Stack.Navigator>
    )
}

export default StackRoot