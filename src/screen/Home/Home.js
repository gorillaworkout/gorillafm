import React, { Component,useState ,useEffect} from 'react';
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
import { SearchBar } from 'react-native-elements';
import {StepForward} from 'react-native-vector-icons/AntDesign'
import * as Animatable from 'react-native-animatable'
import Animated from 'react-native-reanimated'
import {Credentials} from './../../Credentials/Credentials'
import axios from 'axios'
import {Input,Icon} from 'react-native-elements'
import {decode, encode} from 'base-64'
import debounce from 'lodash.debounce';

const Home=({navigation})=>{
    const [search,setSearch]=useState('')
    const [toggleSearch,setToggleSearch]=useState('false')
    const spotify = Credentials();
    const [token, setToken] = useState('');  
    const [genres, setGenres] = useState({selectedGenre: '', listOfGenresFromAPI: []});
    const [playlist, setPlaylist] = useState({selectedPlaylist: '', listOfPlaylistFromAPI: []});
    const [tracks, setTracks] = useState({selectedTrack: '', listOfTracksFromAPI: []});
    const [trackDetail, setTrackDetail] = useState(null);

    const updateSearch=(search)=>{
        // console.log(toggleSearch
        if(search){
            // console.log(search)
            setSearch(search)
            filterSearch(search)
        }else if (search === '' ){
            console.log('line 45')
            fetchAwal()
            setSearch('')
        }

    }
    const filterSearch=debounce(function(search){
        var filterData = genres.listOfGenresFromAPI.filter((val)=>{
            // console.log(val)
            return val.name.toLowerCase().includes(search.toLowerCase())

        })
        if(filterData){
            setGenres({listOfGenresFromAPI:filterData})
            console.log(filterData)
        }else {
            console.log('data kosong')
        }
    },1000)

    const OpenToggleSearch=()=>{
        console.log('toggle jalan jadi true')
        setToggleSearch('true')
    }

    const testButton=()=>{
        console.log('button jalan')
    }
    
    
    const onCheck=(idGenre)=>{
        navigation.navigate('Profile',{idGenre,token})
        console.log(idGenre)
    }
    const fall = new Animated.Value(1)

    // BATAS testing api
    if (!global.btoa) {
        global.btoa = encode;
        }
        
        if (!global.atob) {
        global.atob = decode;
        }

        const fetchAwal=()=>{
            console.log('fetch data jalan')
            axios('https://accounts.spotify.com/api/token', {
                headers: {
                    'Content-Type' : 'application/x-www-form-urlencoded',
                    'Authorization' : 'Basic ' + btoa(spotify.ClientId + ':' + spotify.ClientSecret)      
                },
                data: 'grant_type=client_credentials',
                method: 'POST'
            })
            .then(tokenResponse => {      
                setToken(tokenResponse.data.access_token);
                
                axios('https://api.spotify.com/v1/browse/categories?locale=sv_US', {
                    method: 'GET',
                    headers: { 'Authorization' : 'Bearer ' + tokenResponse.data.access_token}
                })
                .then (genreResponse => {    
                    setGenres({
                        selectedGenre: genres.selectedGenre,
                        listOfGenresFromAPI: genreResponse.data.categories.items
                    })
                    console.log('setState 106 jalan')    
                    console.log(genres.listOfGenresFromAPI,' ini 110')
                });
                
                });
        }
 
  useEffect(() => {
    fetchAwal()

  }, [genres.selectedGenre, spotify.ClientId, spotify.ClientSecret]); 

  const renderTopGenre=()=>{
    return genres.listOfGenresFromAPI.map((val,index)=>{
        // console.log(val.icons)
        // console.log(index)
        // console.log(val.icons[0].url)
        var gambar = val.icons[0].url
        // console.log(gambar)
        if(index<4){
            return (
                <View style={styles.containerTop} key={index+1}>
                    <View style={{height:'74%',width:'30%',borderRadius:100,display:'flex',justifyContent:'center',alignItems:'center'}}>
                        <TouchableOpacity onPress={()=>onCheck(val.id)}>
                            <ImageBackground 
                            source={{uri:gambar}}
                            style={{height:170,width:165,display:'flex',justifyContent:'center',alignItems:'center',overflow:'hidden',borderColor:'#26de81',borderWidth:3,borderRadius:100}}
                            imageStyle={{borderRadius:100}}       
                            >
                                <Text style={{color:'white',fontWeight:'600',fontSize:30,position:'relative',top:40}}>{val.name}</Text>
                            </ImageBackground>
    
                        </TouchableOpacity>
                        
    
                    </View>
                </View>
            )
        }
    })   
  }

  const renderAllGenre=()=>{
      return genres.listOfGenresFromAPI.map((val,index)=>{
          var gambar = val.icons[0].url
          return(
        <View style={styles.containerBrose} key={index+1}>
            <View style={{height:'67%',width:'81%',display:'flex',justifyContent:'center',alignItems:'center',marginBottom:20}}>
               <TouchableOpacity onPress={()=>onCheck(val.id)}>
                    <ImageBackground 
                    source={{uri:gambar}}
                    style={{height:170,width:165,display:'flex',justifyContent:'center',alignItems:'center',overflow:'hidden',borderColor:'#00a8ff',borderWidth:3,borderRadius:10}}
                    imageStyle={{borderRadius:10}}
                    >
                        <Text style={{color:'white',fontWeight:'600',fontSize:30,position:'relative',top:40}}>{val.name}</Text>
                    </ImageBackground>
               </TouchableOpacity>

            </View>
        </View>
          )
      })
  }


 
    return(
        
        <>
        <StatusBar backgroundColor={'#FF8E53'} barStyle={'light-content'}/>
        <SafeAreaView style={{backgroundColor:'black'}}>
            <View style={{height:'100%'}}>
                <View style={{height:'10%',display:'flex',flexDirection:'row',flexWrap:'wrap'}}>
                    <View style={{display:'flex',justifyContent:'flex-start',width:'20%'}}>
                        <Image source={require('./../../../Assets/gorillalogo.png')} style={{height:80,width:80}} />
                    </View>
                    <View 
                    style={{width:'60%',display:'flex',justifyContent:'flex-end',flexDirection:'row',alignItems:'center'}}
                    >
                        <Icon name={'search'} type={'feather'} size={33} color={'white'} style={{marginRight:10,display:'flex'}} onPress={OpenToggleSearch}/>
                    </View>
                    <View style={{width:'20%',display:'flex',justifyContent:'center',flexDirection:'row',alignItems:'center'}}>
                        <Icon name={'account-circle'} type={'Materialicons'} size={33} color={'white'} style={{marginRight:10}}/>
                    </View>
                </View>

                <View style={{height:80,width:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}>
                    <Text style={{color:'#fed330',fontSize:30,fontWeight:'700'}}>Find The Best {"\n"} Music Here</Text>
                </View>
                
                    <View style={{width:'100%'}}>
                        {
                            toggleSearch ==='true'?
                            <>
                                <Animatable.View  animation='fadeIn' style={{flex:1,backgroundColor:'white',opacity:Animated.add(0.1,Animated.multiply(fall,0.9)), marginTop:10}}>
                            
                                    <SearchBar
                                        placeholder="Find Your Music..."
                                        onChangeText={updateSearch}
                                        value={search}
                                        containerStyle={{backgroundColor:'black'}}
                                        style={{width:'100%'}}
                                        
                                    />
                                </Animatable.View>
                                
                            </>
                            :
                            null

                        }
                    
                    </View>
                    
                <ScrollView  style={{height:'100%',width:'100%',display:'flex',marginTop:40,flexGrow:1}}>
                    <View style={{width:'100%',height:'3%',display:'flex',justifyContent:'center',alignItems:'center'}}>
                        <Text style={{color:'white',fontSize:25,fontWeight:'600'}}>TOP GENRES</Text>
                    </View>
                    <View style={{height:'35%',width:'100%',display:'flex',flexWrap:'wrap',paddingLeft:20,paddingRight:20,marginTop:10,flexDirection:'row'}}>     
                        <ScrollView 
                        style={{height:'60%',width:'100%',display:'flex',flexGrow:1}}
                        horizontal nestedScrollEnabled>
                            {renderTopGenre()}                  
                        </ScrollView>
                    </View>
                    <View style={{height:'100%',width:'100%', display:'flex',position:'relative',top:'-20%'}}>
                        <View style={{height:50,width:'100%',display:'flex',justifyContent:'center',paddingLeft:20,marginBottom:20}}>
                            <Text style={{color:'white',fontWeight:'600',fontSize:20}}>Browse All</Text>
                        </View>
                        <View style={{height:'100%',width:'100%',display:'flex',flexWrap:'wrap',flexDirection:'row',marginBottom:30}}>
                            {renderAllGenre()}
                        </View>
                    </View>
                </ScrollView>


            </View>

        </SafeAreaView>
        </>
    )   
}

const styles = StyleSheet.create({
    containerBrose:{
        // backgroundColor:'red',
        height:'9%',
        width:'50%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        shadowColor:'#00a8ff',
        shadowOffset:{
            width:0.5,
            height:0.5
        },
        shadowOpacity:0.58,
        shadowRadius:7,
        elevation:24
        // marginBottom:10

    },
    containerTop:{
        // backgroundColor:'red',
        height:'40%',
        width:'28%',
        borderRadius:100,
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
        marginBottom:10
    }
})

export default Home

