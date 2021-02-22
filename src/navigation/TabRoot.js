import React, { Component } from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import {Icon} from 'react-native-elements'
import {View,Text,SafeAreaView,ScrollView} from 'react-native'
import {useSelector} from 'react-redux'
import HomeScreen from './../screen/Home/Home'
import OpeningScreen from './../screen/Opening'
// import Profile from './../screen/Profile/Profile'
import Playlist from './../screen/Playlist/Playlist'
import Login from './../screen/Login/Login'
const Tab=createBottomTabNavigator()

const TabRoot=()=>{
    const Auth=useSelector(state=>state.Auth)

    return (
        
        <Tab.Navigator
        screenOptions={({route})=>({
            tabBarIcon:({focused,color,size})=>{
                let iconName;
                let type;
                if(route.name === 'Home'){
                    iconName=focused?'home':'home'
                    type='feather'             
                }else if (route.name==='Profile'){
                    iconName=focused?'history':'history'
                    type='font-awesome'
                }else if (route.name==='Search'){
                    iconName=focused?'search-location':'search-location'
                    type='font-awesome-5'
                    let colors= focused ? 'white':'white'
                    return (
                        <View style={{
                            marginTop:-50,
                            backgroundColor:'transparent',
                            height:60,
                            width:60,
                            padding:5,
                            justifyContent:'center',
                            alignItems:'center',
                            borderRadius:30,
                            borderWidth:5,
                            borderColor:'lightgreen',
                            shadowColor:'black',
                            shadowOffset:{
                                width:100,
                                height:100
                            },
                            elevation:7,
                            shadowRadius:50
                        }}>
                            <Icon name={iconName} type={type} size={size} color={color}/>
                        </View>
                    )
                }else if (route.name==='Playlist'){
                    iconName=focused?'cart-arrow-down':'cart-arrow-down'
                    type='font-awesome-5'
                }else {
                    iconName=focused? 'logout':'logout'
                    type='antdesign'
                }
                return (
                    <>
                    <View style={{width:'100%',height:'100%', marginTop:30}}>
                        <Icon name={iconName} type={type} size={size} color={color}/>

                    </View>
                    </>
                    )
                
            },
            tabBarLabel:({focused,color})=>{
                return null
            }
         
        })}
        tabBarOptions={{
            inactiveTintColor:'lightgray',
            activeTintColor:'#fed330',
            // activeBackgroundColor:'green',
            style:{
                backgroundColor:'black',
                // borderTopLeftRadius:100,
                // borderTopRightRadius:100,
                // borderBottomLeftRadius:100,
                // borderBottomRightRadius:100

            }
        }}
        >
             <Tab.Screen name='Home' component={HomeScreen}/>
             <Tab.Screen name='Search' component={HomeScreen}/>
             <Tab.Screen name='Playlist' component={Playlist}/>

            {/* <Tab.Screen name='Opening' component={OpeningScreen}/> */}
            
            
        </Tab.Navigator>
       
    )

}

export default TabRoot