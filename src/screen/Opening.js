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
    ImageBackground,
    Button,
    TouchableOpacity
} from 'react-native'
import { createAnimatableComponent } from 'react-native-animatable';
import Animated from 'react-native-reanimated'
import * as Animatable from 'react-native-animatable'
import LinearGradient from 'react-native-linear-gradient';
import {Input,Icon} from 'react-native-elements'

import PlayButton from 'react-native-vector-icons/Feather';
const OpeningScreen=({navigation})=>{
    const fall = new Animated.Value(1)
    return (
        <>
            <StatusBar backgroundColor={'#FF8E53'} barStyle={'light-content'}/>
                <Animatable.View animation='fadeIn' style={{flex:1,backgroundColor:'white',opacity:Animated.add(0.1,Animated.multiply(fall,0.9))}}>
                    <ImageBackground
                            source={require('./../../Assets/bg6.jpg')}
                            style={{flex:1,width:'100%', height:'100%'}}
                            resizeMode='cover'
                            >
                        <SafeAreaView>
                            <View style={{width:'100%', display:'flex',justifyContent:'center',alignItems:'center',marginTop:50}}>
                                {/* <LinearGradient colors={['#0984e3','#74b9ff','#1b2449']}> */}
                                    <Text style={{fontSize:45,color:'#c8d6e5',fontWeight:'800'}}>
                                        GORILLAFY
                                    </Text>
                                {/* </LinearGradient> */}
                            </View>
                            <View style={{height:'32%',display:'flex',marginTop:100,justifyContent:'flex-end'}}> 
                                <Text style={{fontSize:40,marginBottom:10,color:'#1dd1a1',fontWeight:'800'}}>Here</Text>
                                <Text style={{fontSize:40,marginBottom:10,color:'#ee5253',fontWeight:'800'}}>A New</Text>
                                <Text style={{fontSize:40,marginBottom:10,color:'#1dd1a1',fontWeight:'800'}}>Music App</Text>
                            </View>
                            <View style={{height:'33%',display:'flex',justifyContent:'center',alignItems:'center'}}>
                              <TouchableOpacity 
                              style={{backgroundColor:'#c8d6e5',height:'22%',width:'90%',borderRadius:10,display:'flex',justifyContent:'center',alignItems:'center',marginTop:70}}
                              onPress={()=>navigation.navigate('Login')}
                              >
                                  <Text style={{fontWeight:'700',fontSize:32,color:'#1dd1a1'}}>
                                     <Icon name={'play'} type={'feather'} size={33} color={'#ee5253'} style={{marginRight:10}}/>
                                      Get Started</Text>
                              </TouchableOpacity>
                            </View>
                            
                        </SafeAreaView>
                    </ImageBackground>
                </Animatable.View>
           
        </>
    )
}

export default OpeningScreen