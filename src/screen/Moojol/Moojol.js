import React, { Component } from 'react';
import {
    View,
    Text,
    Button,
    FlatList,
    StyleSheet,
    ImageBackground,
    TouchableWithoutFeedback,
    RefreshControl,
    StatusBar,
    SafeAreaView,
    Image
} from 'react-native'
import {Input,Icon} from 'react-native-elements'
import Icon2 from 'react-native-vector-icons/FontAwesome';
import Icon3 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon4 from 'react-native-vector-icons/Ionicons';
import Icon5 from 'react-native-vector-icons/Fontisto';
{/* <Icon2 name={'ellipsis-h'} size={33} color={'white'} style={{marginRight:10,display:'flex'}} /> */}

const Moojol=()=>{
    return (
        <>
            <StatusBar backgroundColor={'#f7f2f2'} barStyle={'dark-content'} />
            <SafeAreaView style={{height:'100%',width:'100%',backgroundColor:'#ffcccc'}}>
              <View style={{height:'5%',width:'100%',paddingLeft:10,paddingRight:10,display:'flex',justifyContent:'space-between',flexDirection:'row',alignItems:'center',backgroundColor:'white',borderBottomLeftRadius:20,borderBottomRightRadius:20,marginTop:-10}}>
                   <Icon2 name={'bars'} size={30} color={'black'} style={{marginRight:10,display:'flex'}} />
                   <Image source={require('./../../../Assets/gorillalogo.png')} style={{height:40,width:60}} />
                   <Icon2 name={'bell-o'} size={25} color={'black'} style={{marginRight:10,display:'flex'}} />
              </View>
              <View style={{height:'13%',width:'90%',backgroundColor:'red',marginLeft:20,marginRight:20,marginTop:25,borderTopLeftRadius:20,borderTopRightRadius:20,display:'flex',flexDirection:'row',borderTopLeftRadius:20,borderTopRightRadius:20}}>
                    <ImageBackground 
                    source={require('./../../../Assets/rap1.jpg')}
                    style={{height:50,width:50,display:'flex',justifyContent:'center',alignItems:'center',overflow:'hidden',borderColor:'white',borderWidth:3,borderRadius:100,justifyContent:'center',alignSelf:'center',marginLeft:20}}
                    imageStyle={{borderRadius:100}}
                    >
                    </ImageBackground>
                    
                    <View style={{display:'flex',justifyContent:'center',marginLeft:10}}>
                        <Text style={{color:'white',fontWeight:'800',fontSize:18}}>BAYU</Text>
                        <View style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'row'}}>
                            <Icon2 name={'star'} size={20} color={'yellow'} style={{marginRight:10,display:'flex'}} />
                            <Icon2 name={'star'} size={20} color={'yellow'} style={{marginRight:10,display:'flex'}} />
                            <Icon2 name={'star'} size={20} color={'yellow'} style={{marginRight:10,display:'flex'}} />
                            <Icon2 name={'star'} size={20} color={'yellow'} style={{marginRight:10,display:'flex'}} />
                            <Icon2 name={'star-o'} size={20} color={'white'} style={{marginRight:10,display:'flex'}} />
                        </View>
                    </View>
              </View>

              <View style={{height:'10%',width:'90%',backgroundColor:'white',marginLeft:20,marginRight:20,borderTopLeftRadius:20,borderTopRightRadius:20,display:'flex',flexDirection:'row',marginTop:-15,borderBottomWidth:1,borderColor:'gray'}}> 
                <View style={{height:'100%',width:'80%',paddingLeft:20,display:'flex',justifyContent:'center'}}>
                    <Text style={{fontSize:25}}>
                        Rp 200,000
                    </Text>
                    <Text style={{fontSize:15,color:'#34495e'}}>Gorilla Saku</Text>
                </View>
                <View style={{height:'100%',width:'20%',}}>

                    <View style={{
                        height:60,width:60,backgroundColor:'white',display:'flex',justifyContent:'center',alignItems:'center',marginTop:5,marginLeft:2,borderRadius:100,
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 8,
                        },
                        shadowOpacity: 0.44,
                        shadowRadius: 10.32,

                        elevation: 16
                        }}>
                             <Icon2 name={'plus'} size={25} color={'red'} style={{marginRight:10,display:'flex',marginLeft:10}} />


                    </View>
                </View>

              </View>
              <View style={{height:'10%',width:'90%',backgroundColor:'white',marginLeft:20,marginRight:20,display:'flex',flexDirection:'row',marginTop:0,borderBottomLeftRadius:20,borderBottomRightRadius:20,shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 8,
                        },
                        shadowOpacity: 0.44,
                        shadowRadius: 10.32,

                        elevation: 16}}> 
                    <View style={{height:'100%',width:'60%',paddingLeft:20,display:'flex',justifyContent:'center'}}>
                        <Text style={{fontSize:20}}>
                            Rp 62-,***,**5,545
                        </Text>
                        <Text style={{fontSize:15,color:'#34495e'}}>Dana = 34866</Text>
                    </View>
                    <View style={{height:'100%',width:'40%',}}>

                        <View style={{
                            height:'100%',width:'100%',display:'flex',justifyContent:'center',alignItems:'center',marginLeft:2
                            }}>
                                <Image 
                                source={require('./../../../Assets/dana.png')}
                                style={{height:30,width:100}}
                                />


                        </View>
                    </View>
              </View>
              <View style={{height:'30%',width:'100%',display:'flex',flexWrap:'wrap',paddingLeft:25,paddingRight:25,marginTop:20,flexDirection:'row'}}>
                    <View style={{height:100,width:70,marginBottom:40,display:'flex',justifyContent:'center',alignItems:'center',marginLeft:10,marginRight:10}}>
                        <View style={{height:70,width:70,borderRadius:100,borderWidth:3,borderColor:'white',backgroundColor:'#f8a5c2',display:'flex',justifyContent:'center',alignItems:'center'}}>
                            <Icon3 name={'motorbike'}  size={40} color={'red'} style={{display:'flex'}} />
                        </View>
                        <Text style={{color:'black',fontWeight:'800',marginTop:5}}>Mootor</Text>
                    </View>
                    <View style={{height:100,width:70,marginBottom:40,display:'flex',justifyContent:'center',alignItems:'center',marginLeft:10,marginRight:10}}>
                        <View style={{height:70,width:70,borderRadius:100,borderWidth:3,borderColor:'white',backgroundColor:'#f8a5c2',display:'flex',justifyContent:'center',alignItems:'center'}}>
                            <Icon4 name={'car'}  size={30} color={'red'} style={{display:'flex'}} />
                        </View>
                        <Text style={{color:'black',fontWeight:'800',marginTop:5}}>Moobil</Text>
                    </View>
                    <View style={{height:100,width:70,marginBottom:40,display:'flex',justifyContent:'center',alignItems:'center',marginLeft:10,marginRight:10}}>
                        <View style={{height:70,width:70,borderRadius:100,borderWidth:3,borderColor:'white',backgroundColor:'#f8a5c2',display:'flex',justifyContent:'center',alignItems:'center'}}>
                            <Icon3 name={'silverware-fork-knife'}  size={30} color={'red'} style={{display:'flex'}} />
                        </View>
                        <Text style={{color:'black',fontWeight:'800',marginTop:5,fontSize:12}}>MooMakan</Text>
                    </View>
                    <View style={{height:100,width:70,marginBottom:40,display:'flex',justifyContent:'center',alignItems:'center',marginLeft:10,marginRight:10}}>
                        <View style={{height:70,width:70,borderRadius:100,borderWidth:3,borderColor:'white',backgroundColor:'#f8a5c2',display:'flex',justifyContent:'center',alignItems:'center'}}>
                            <Icon4 name={'send'}  size={30} color={'red'} style={{display:'flex'}} />
                        </View>
                        <Text style={{color:'black',fontWeight:'800',marginTop:5}}>MooKirim</Text>
                    </View>
                    <View style={{height:100,width:70,marginBottom:40,display:'flex',justifyContent:'center',alignItems:'center',marginLeft:10,marginRight:10}}>
                        <View style={{height:70,width:70,borderRadius:100,borderWidth:3,borderColor:'white',backgroundColor:'#f8a5c2',display:'flex',justifyContent:'center',alignItems:'center'}}>
                            <Icon3 name={'airplane'}  size={30} color={'red'} style={{display:'flex'}} />
                        </View>
                        <Text style={{color:'black',fontWeight:'800',marginTop:5}}>MooFly</Text>
                    </View>
                    <View style={{height:100,width:70,marginBottom:40,display:'flex',justifyContent:'center',alignItems:'center',marginLeft:10,marginRight:10}}>
                        <View style={{height:70,width:70,borderRadius:100,borderWidth:3,borderColor:'white',backgroundColor:'#f8a5c2',display:'flex',justifyContent:'center',alignItems:'center'}}>
                            <Icon3 name={'train'}  size={30} color={'red'} style={{display:'flex'}} />
                        </View>
                        <Text style={{color:'black',fontWeight:'800',marginTop:5}}>MooTrain</Text>
                    </View>
                    <View style={{height:100,width:70,marginBottom:40,display:'flex',justifyContent:'center',alignItems:'center',marginLeft:10,marginRight:10}}>
                        <View style={{height:70,width:70,borderRadius:100,borderWidth:3,borderColor:'white',backgroundColor:'#f8a5c2',display:'flex',justifyContent:'center',alignItems:'center'}}>
                            <Icon3 name={'bus-school'}  size={35} color={'red'} style={{display:'flex'}} />
                        </View>
                        <Text style={{color:'black',fontWeight:'800',marginTop:5}}>MooBus</Text>
                    </View>
                    <View style={{height:100,width:70,marginBottom:40,display:'flex',justifyContent:'center',alignItems:'center',marginLeft:10,marginRight:10}}>
                        <View style={{height:70,width:70,borderRadius:100,borderWidth:3,borderColor:'white',backgroundColor:'#f8a5c2',display:'flex',justifyContent:'center',alignItems:'center'}}>
                            <Icon5 name={'nav-icon-grid'}  size={30} color={'red'} style={{display:'flex'}} />
                        </View>
                        <Text style={{color:'black',fontWeight:'800',marginTop:5}}>Lainnya</Text>
                    </View>     
              </View>
              <View style={{height:'20%',paddingLeft:35,marginTop:40}}>
                        <View style={{height:'20%',width:'100%'}}>
                            <Text style={{fontSize:20,fontWeight:'600'}}>FOOD PROMO</Text>
                        </View>
              </View>
             
            </SafeAreaView>
        </>

    )
}

export default Moojol