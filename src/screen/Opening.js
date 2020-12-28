import React, { Component } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Platform,
    Keyboard,
    TouchableWithoutFeedback,
    Alert,
    ImageBackground
} from 'react-native'

const OpeningScreen=({navigation})=>{
    return (
        <>
            
                <SafeAreaView >
                    <View style={{backgroundColor:'red'}}>
                        <Text >Opening Screen</Text>
                    </View>
                </SafeAreaView>
           
        </>
    )
}

export default OpeningScreen