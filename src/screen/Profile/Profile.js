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
import axios from 'axios';
import {Input,Icon} from 'react-native-elements'
import Icon2 from 'react-native-vector-icons/FontAwesome';

const Profile=({navigation,route})=>{

    const {idGenre,token} = route.params
    const [dataPlaylist,setDataPlaylist] = useState({selectedPlaylist:'',listOfPlaylistFromAPI:[]})
    const [gambarGenre,setGambarGenre] = useState('')
    const [genreLike,setGenreLike] = useState(false)
    const [totalGenreLike,setTotalGenreLike]=useState([])

    useEffect(()=>{

    axios(`https://api.spotify.com/v1/browse/categories/${idGenre}/playlists?limit=10`,{
        method:'GET',
        headers:{'Authorization':'Bearer ' + token}
    }).then(playlistResponse =>{
        console.log(playlistResponse.data.playlists)
        setDataPlaylist({
            selectedPlaylist:idGenre,
            listOfPlaylistFromAPI:playlistResponse.data.playlists.items
        })
        setGambarGenre(playlistResponse.data.playlists.items[0].images[0].url)

    })

    },[])

    const likeGenre=(index)=>{
        if(genreLike){
            console.log('masuk true')
            console.log(index)
            setGenreLike(false)
        }else {
            console.log('masuk else')
            setGenreLike(true)
            // setTotalGenreLike([index])
            // totalGenreLike.push(index)
        }
    }

    const gotoPlaylist=(playlistName,idPlaylist)=>{
        // console.log(idPlaylist, ' ini ID')
        // console.log(dataPlaylist)
        // var dataPilih = idPlaylist
        // var arrayDataPlaylist = dataPlaylist.listOfPlaylistFromAPI
        // var filterPlaylist = arrayDataPlaylist.filter((val,index)=>{
        //     return val.id === dataPilih
        // })
        // console.log(filterPlaylist)
        var dataPlaylists = dataPlaylist.listOfPlaylistFromAPI
        navigation.navigate('Playlist',{playlistName,idPlaylist,dataPlaylists,token})
    }

    

    const newRenderPlaylist =()=> {
        return dataPlaylist.listOfPlaylistFromAPI.map((val,index)=>{
            var gambar = val.images[0].url
            return (
                <TouchableOpacity style={{height:'12%',width:'100%',marginBottom:10}} onPress={()=>gotoPlaylist(val.name,val.id)}>
                    <View style={{height:'100%',width:'100%',display:'flex',flexDirection:'row',margin:5}} key={index+1}>
                        <View style={{height:'100%',width:'50%',display:'flex',alignItems:'center',justifyContent:'center'}}>
                            <View style={{height:'100%',width:'90%',borderWidth:1,borderRadius:10}}>
                            <ImageBackground
                            source={{uri:gambar}}
                            style={{height:'100%',width:'100%',borderRadius:10,borderWidth:4,borderColor:'#26de81'}}
                            resizeMode='cover'
                            />
                            </View>
                        </View>
                        <View style={{height:'100%',width:'50%',paddingTop:10,paddingBottom:10}}>
                            <Text style={{fontSize:30,fontWeight:'700'}}>{val.name}</Text>
                            <Text style={{fontSize:15,color:'gray',fontWeight:'700'}}>{val.length}</Text>
                            <View style={{display:'flex',flexDirection:'row',margin:5}}>
                                <Icon name={'play'} type={'antdesign'} size={30} color={'white'} style={{display:'flex',marginRight:10}} />
                                <Text style={{fontSize:20}}>Play Now</Text>
                            </View>
                            
                        </View>
                    </View>
                </TouchableOpacity>
            )
        })
    }


    console.log(idGenre)
    console.log(token)
    return (
            <>
            <StatusBar backgroundColor={'#FF8E53'} barStyle={'dark-content'}/>
            <ImageBackground
             source={require('./../../../Assets/rap5.jpg')}
             style={{flex:1,width:'100%', height:'100%'}}
             resizeMode='cover'
            >
                <SafeAreaView >
                    <View style={{height:'6%',width:'100%',display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
                        <Icon name={'arrow-back'} type={'ionicons'} size={33} color={'white'} style={{marginRight:10,display:'flex'}} onPress={()=>navigation.goBack()} />
                        <Text style={{color:'white',fontSize:30,fontWeight:'800'}}>{idGenre}</Text>
                        <Icon name={'settings'} type={'ionicons'} size={33} color={'white'} style={{marginRight:10,display:'flex'}} />
                    </View>

                    <ScrollView style={{width:'100%',height:'100%',padding:5}}>
                        {/* {renderPlaylist()} */}
                        {newRenderPlaylist()}
                        
                        
                    </ScrollView>

                </SafeAreaView>
            </ImageBackground>
            </>
    )
}


export default Profile
