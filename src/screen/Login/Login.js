import React, { Component,useState } from 'react';

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
    Image,
    Button
} from 'react-native'
import Animated from 'react-native-reanimated'
import * as Animatable from 'react-native-animatable'
import {Input,Icon} from 'react-native-elements'
import {useDispatch,useSelector} from 'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Login=({navigation,route})=>{
    const fall = new Animated.Value(1)
    const dispatch=useDispatch()
    const [isusernamefilled,setisusernamefilled]=useState(false)

    const [datauser,setdatauser] = useState({
        username:''
    })
    const OnInputChangeText=(text)=>{
        if(text){
          setisusernamefilled(true)
        }else{
          setisusernamefilled(false)
        }
        setdatauser({...datauser,username:text})
      }


    const onLoginPress=()=>{
        dispatch({type:'LOADING'})
        console.log('button login jalan')
        console.log(datauser.username)
        let id = datauser.username
        AsyncStorage.setItem('idUser',id)
        .then(()=>{
            dispatch({type:'LOGINTEST',payload:datauser.username})
        }).catch((err)=>{
            console.log(err)
            dispatch({type:'ERROR'})
        })
    }

return (
    <>
            <StatusBar backgroundColor={'#FF8E53'} barStyle={'light-content'}/>
            <Animatable.View animation='fadeIn' style={{flex:1,backgroundColor:'white',opacity:Animated.add(0.1,Animated.multiply(fall,0.9))}}>
               <ImageBackground
                 source={require('./../../../Assets/bg6.jpg')}
                 style={{flex:1,width:'100%', height:'100%'}}
                 resizeMode='cover'
               >
                   <SafeAreaView>
                   <View style={{display:'flex',justifyContent:'flex-start',width:'20%'}}>
                        <Image source={require('./../../../Assets/gorillalogo.png')} style={{height:80,width:80}} />
                    </View>
                    <View style={{width:'100%',display:'flex',justifyContent:'center'}}>
                        <Text style={{fontSize:35,color:'#1dd1a1',paddingLeft:'10%',marginTop:10}}>Enjoy</Text>
                        <Text style={{fontSize:35,color:'white',paddingLeft:'28%',marginTop:10}}>Your</Text>
                        <Text style={{fontSize:35,color:'#1dd1a1',paddingLeft:'43%',marginTop:10}}>Music</Text>
                        <Text style={{fontSize:35,color:'white',paddingLeft:'60%',marginTop:10}}>With</Text>
                        <Text style={{fontSize:35,color:'#ee5253',paddingLeft:'75%',marginTop:10}}>Me</Text>
                    </View>
                    <View style={{height:'100%',width:'100%',backgroundColor: 'rgba( 100,100, 100, 0.5 )',borderTopLeftRadius:50,borderTopRightRadius:50,marginTop:10}}>
                        <View style={{height:'10%',width:'100%',display:'flex',justifyContent:'space-between',flexDirection:'row',marginTop:40,paddingRight:30,paddingLeft:30}}>
                            <Text style={{color:'white',fontSize:30,fontWeight:'600'}}>
                                Welcome Back 
                            </Text>
                            <View style={{height:'42%',width:'20%',borderWidth:1,borderColor:'white',display:'flex',justifyContent:'center',borderRadius:15}}>
                                <Icon name={'camera'} type={'font-awesome'} size={30} color={'#ee5253'}/>
                            </View>
                        </View>
                        <View>
                        <Input
                            placeholder={'Your Name'}
                            value={datauser.username}
                            placeholdeTextColor={isusernamefilled?'#FF8E53':'lightgray'}
                            inputContainerStyle={{borderColor:isusernamefilled?'#FF8E53':'lightblue'}}
                            inputStyle={{color:'#FE6B8B'}}
                            label={'Username'}
                            labelStyle={{color:isusernamefilled?'#FF8E53':'lightgray'}}
                            onChangeText={OnInputChangeText}
                            />  
                        </View>

                        <View style={{paddingBottom:100}}>
                                    <Button
                                    style={{paddingHorizontal:30}}
                                    buttonStyle={{backgroundColor:'hotpink',borderRadius:10}}
                                    title='Sign In'
                                    onPress={onLoginPress}
                                    />
                        </View>


                    </View>

                   </SafeAreaView>
               </ImageBackground>
            </Animatable.View>

    </>
)
}

export default Login