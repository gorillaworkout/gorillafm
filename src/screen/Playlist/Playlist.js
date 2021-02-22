import axios from 'axios';
import React, { Component, useEffect,useState } from 'react';
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
// import iconAnt from 'react-native-vector-icons/AntDesign'

export default function Playlist({navigation,route}){

    const {playlistName,idPlaylist,dataPlaylists,token} = route.params
    // console.log(idPlaylist,' ini id PLaylist')
    // console.log(dataPlaylists)
    // console.log(token)

    
    const [tracks, setTracks] = useState({selectedTrack: '', listOfTracksFromAPI: []});

    useEffect(()=>{
        
        axios(`https://api.spotify.com/v1/playlists/${idPlaylist}/tracks?limit=10`, {
            method: 'GET',
            headers: {
              'Authorization' : 'Bearer ' + token
            }
          })
          .then(tracksResponse => {
              console.log('DATA TRACK DARI SINI')
            console.log(tracksResponse.data.items[0].track.album.images[0].url)
            setTracks({
              selectedTrack: tracks.selectedTrack,
              listOfTracksFromAPI: tracksResponse.data.items
            })
            console.log(tracks.listOfTracksFromAPI.length)
          });
    },[])

    const goToPlay=(track)=>{
        console.log('jalan go to play')
        // console.log(track)
        navigation.navigate('PlayPage',{track})
    }
    const renderPlaylist =()=>{
        var data = tracks.listOfTracksFromAPI
        
        return data.map((val,index)=>{
            console.log('renderplaylist')
            console.log(val)
            console.log(val.track)
            console.log(val.track.album.images[0].url)
        var gambar = val.track.album.images[0].url
            return (
                <View style={{height:'8%',width:'100%',padding:16}} key={index+1}>
                        <TouchableOpacity onPress={()=>goToPlay(val.track)}>
                            <View style={{height:60,width:'100%',display:'flex',flexDirection:'row',justifyContent:'space-between',paddingLeft:20,paddingRight:20,alignItems:'center'}} 
                            >
                                <Image 
                                source={{uri:gambar}}
                                // source={{uri:gambar}}
                                style={{height:50,width:50,borderRadius:100,borderWidth:3,borderColor:'#26de81'}}
                                />
                                <Text style={{color:'white',fontSize:20,fontWeight:'700',flexWrap:'wrap'}}  numberOfLines={1}>{val.track.name.length<20? val.track.name : val.track.name.substring(0,15)}</Text>
                                <Icon name={'heart'} type={'fontisto'} size={25} color={'white'} style={{marginRight:10,display:'flex'}}/>
                                <Icon2 name={'ellipsis-h'} size={33} color={'#00a8ff'} style={{marginRight:10,display:'flex'}} />
                            </View>
                        </TouchableOpacity>
                    </View>
            )
        })
    }

    return(
        <>
        <StatusBar backgroundColor={'#FF8E53'} barStyle={'dark-content'}/>
           <ImageBackground
           source={require('./../../../Assets/rap7.jpg')}
           style={{flex:1,width:'100%',height:'100%'}}
           resizeMode='cover'
           >
               <SafeAreaView style={{height:'100%',width:'100%'}}>
                   <View style={{height:'6%',width:'100%',display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
                        <Icon name={'arrow-back'} type={'ionicons'} size={33} color={'white'} style={{marginRight:10,display:'flex'}} onPress={()=>navigation.goBack()} />
                        <Text style={{color:'white',fontSize:30}}> Playlist</Text>
                        <Icon name={'ellipsis1'} type={'antdesign'} size={33} color={'white'} style={{marginRight:10,display:'flex'}} />
                    </View>
                    <View style={{height:'25%',width:'100%',display:'flex',flexDirection:'row'}}>
                        <View style={{height:'100%',width:'50%',display:'flex',justifyContent:'center',alignItems:'center'}}>
                            <View style={{height:'90%',width:'90%',borderWidth:1,borderRadius:10}}>
                            <Image 
                            source={require('./../../../Assets/rap.jpg')}
                            style={{height:'100%',width:'100%',borderRadius:10,borderWidth:4,borderColor:'#26de81'}}
                            />
                            </View>
                        </View>
                        <View style={{height:'100%',width:'50%',padding:16}}>
                            <Text style={{fontSize:30,fontWeight:'700'}}>{playlistName}</Text>
                            <Text style={{fontSize:20,color:'black',fontWeight:'700',marginBottom:30}}> {tracks.listOfTracksFromAPI.length} Playlist</Text>
                            <View style={{height:'40%',width:'100%',display:'flex',flexDirection:'column',justifyContent:'center'}}>
                                <View style={{display:'flex',flexDirection:'row',margin:5}}>
                                    <Icon name={'play'} type={'antdesign'} size={30} color={'white'} style={{display:'flex',marginRight:10}} />
                                    <Text style={{fontSize:20}}>Play Now</Text>
                                </View>
                                <View style={{display:'flex',flexDirection:'row',margin:5}}>
                                    <Icon name={'heart'} type={'antdesign'} size={30} color={'white'} style={{display:'flex',marginRight:10}} />
                                    <Icon name={'ellipsis1'} type={'antdesign'} size={33} color={'white'} style={{marginRight:10,display:'flex'}} />
                                </View>
                                
                            </View>
                        </View>
                    </View>
                    <View style={{height:'8%',width:'100%',display:'flex',flexDirection:'row',justifyContent:'space-between',padding:10}}>
                        <Text style={{fontSize:25,color:'white',fontWeight:'800'}}>Playlist</Text>
                        <Text style={{fontSize:25,color:'white',fontWeight:'800'}}>Song</Text>
                        <Text style={{fontSize:25,color:'white',fontWeight:'800'}}>Option</Text>
                    </View>

                    <ScrollView>
                        {renderPlaylist()}
                    </ScrollView>
                    
               </SafeAreaView>
           </ImageBackground>
        </>
    )
}