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
    TouchableOpacity,
    Image
} from 'react-native'
import {Input,Icon} from 'react-native-elements'
import Icon2 from 'react-native-vector-icons/FontAwesome';


export default function Play({navigation,route}){

    const {track} = route.params
    console.log(track)
    console.log(track.album.images)

    const renderGambar=()=>{
        var dataTrack = [track]

        return dataTrack.map((val,index)=>{
            var gambar  = val.album.images[0].url
            console.log(val.album.images)
            return (
            <View style={styles.containerTop} key={1}>
                <View style={{height:'74%',width:'30%',borderRadius:10,display:'flex',justifyContent:'center',alignItems:'center'}}>
                    <TouchableOpacity onPress={()=>onCheck(1)}>
                        <ImageBackground 
                        source={{uri:gambar}}
                        style={{height:210,width:200,display:'flex',justifyContent:'center',alignItems:'center',overflow:'hidden',borderColor:'#26de81',borderWidth:3,borderRadius:10}}
                        imageStyle={{borderRadius:10}}
                        
                        >
                            {/* <Text style={{color:'white',fontWeight:'600',fontSize:30,position:'relative',top:40}}>TESTING</Text> */}
                        </ImageBackground>

                    </TouchableOpacity>
                </View>
            </View>
            )
        })
    }

    const testDataGambar=(linkGambar)=>{
        console.log('link gambar jalan')
        console.log(linkGambar)
    }

    return(
        <>
           <StatusBar backgroundColor={'#FF8E53'} barStyle={'light-content'}/>
           <SafeAreaView style={{height:'100%',width:'100%',backgroundColor:'black'}}>
            <View style={{height:'6%',width:'100%',display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
                    <Icon name={'arrow-back'} type={'ionicons'} size={33} color={'white'} style={{marginRight:10,display:'flex'}} onPress={()=>navigation.goBack()} />
                    <Text style={{color:'white',fontSize:30}}> Now Playing</Text>
                    <Icon name={'ellipsis1'} type={'antdesign'} size={33} color={'white'} style={{marginRight:10,display:'flex'}} />
                </View>
                <View style={{height:'30%',width:'100%',display:'flex',justifyContent:'center',alignItems:'center',position:'relative',top:50}}>
                    <View style={styles.containerTop} key={1}>
                        <View style={{height:'74%',width:'30%',borderRadius:10,display:'flex',justifyContent:'center',alignItems:'center'}}>
                            <TouchableOpacity onPress={()=>testDataGambar(track.album.images[0].url)}>
                                <ImageBackground 
                                source={{uri:track.album.images[0].url}}
                                style={{height:240,width:240,display:'flex',justifyContent:'center',alignItems:'center',overflow:'hidden',borderColor:'#26de81',borderWidth:3,borderRadius:10}}
                                imageStyle={{borderRadius:10}}>
                                </ImageBackground>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={{height:'15%',width:'100%',marginTop:10,display:'flex',justifyContent:'center',alignItems:'center',marginBottom:20,position:'relative',top:30}}>
                    <Text style={{color:'white',fontSize:35,fontWeight:'700'}}>{track.name}</Text>
                    <Text style={{color:'#dfe6e9',fontSize:25,fontWeight:'600'}}>{track.artists[0].name}</Text>
                </View>

                <View style={{height:'10%',width:'100%',display:'flex',justifyContent:'center',alignItems:'center',paddingLeft:10,paddingRight:10,marginBottom:20}}>
                    <View style={{height:'20%',width:'100%',borderBottomWidth:2,borderBottomColor:'gray'}}>

                    </View>
                    <View style={{height:'20%',width:'100%',display:'flex',justifyContent:'space-between',flexDirection:'row'}}>
                        <Text style={{color:'white'}}>0:00</Text>
                        <Text style={{color:'white'}}>-3:59</Text>
                    </View>
                    

                    
                </View>

                <View style={{height:'15%',width:'100%',display:'flex',justifyContent:'space-between',alignItems:'center',flexDirection:'row',marginBottom:30,padding:16}}>
                    <Icon name={'heart'} type={'antdesign'} size={35} color={'white'} style={{marginRight:10,display:'flex'}} />
                    <Icon name={'stepbackward'} type={'antdesign'} size={40} color={'white'} style={{marginRight:10,display:'flex'}} />
                    <Icon name={'rightcircle'} type={'antdesign'} size={55} color={'white'} style={{marginRight:10,display:'flex'}} />
                    <Icon name={'stepforward'} type={'antdesign'} size={40} color={'white'} style={{marginRight:10,display:'flex'}} />
                    <Icon name={'retweet'} type={'antdesign'} size={35} color={'white'} style={{marginRight:10,display:'flex'}} />
                </View>

               

                
           </SafeAreaView>

        </>
    )
}

const styles = StyleSheet.create({
    containerTop:{
        // backgroundColor:'red',
        height:'100%',
        width:'100%',
        borderRadius:10,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        shadowColor:'#44bd32',
        shadowOffset:{
            width:1,
            height:1
        },
        shadowOpacity:0.58,
        shadowRadius:16.00,
        elevation:24, 
        flexGrow:1
    },
    boxGambar:{
        height:'100%',
        width:'100%',
        display:'flex',
        backgroundColor:'blue'
    }
})