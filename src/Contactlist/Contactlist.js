import axios from 'axios';
import React, {Component} from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  Text,
  StatusBar,
  FlatList,
  ImageBackground,
  StyleSheet,
  Alert,
  FastImage,
  ScrollView,
  Linking
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { toast } from '../../Config/functions';
import { fetchDoctorsListUrl } from '../../Utils/Api';
import { Assets } from '../assets';

 
 
export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
       doctorList:[],
       isLoading:false
    };
  }
async componentDidMount(){
  await this.fetchDoctorsList();
}
fetchDoctorsList = async()=>{
  var url = fetchDoctorsListUrl();
  this.setState({
    isLoading:true
  })
  await axios.get(url).then((res)=>{
    console.log('respnse of doctors list',res.data)
    this.setState({
      doctorList:res.data,
      isLoading:false
    })
  }).catch((err)=>{
    this.setState({
      isLoading:false
    })
    toast(err?.message)
  })
}
  render() {
    return (
      <View style={{marginBottom:70}} >
         <View style={{flexDirection:'row',  backgroundColor:'#1a237e',height:60}}> 
         <TouchableOpacity onPress={() => this.props.navigation.navigate('New Call')}>
         <Image style={{height:20,width:20,alignSelf:'center',marginLeft:15,marginTop:15,color:'white'}} source={Assets.back}/>
         </TouchableOpacity>
      
            
                  <Text style={{ color: 'white', fontSize: 22, marginTop:8,   marginLeft:20, }}>
          Your Nearest Paravet List
        </Text>
        {/* <TouchableOpacity onPress={() => this.props.navigation.navigate('Expert')}
                >
        <Image style={{height:45,width:45,alignSelf:'center',marginLeft:30,marginTop:6}} source={Assets.expert}/>
        </TouchableOpacity> */}
     

      </View>
       
        <ScrollView>
          <View style={{flex:1}}>
      
          <FlatList
            style={{
              marginHorizontal: 5,
            }}
            data={this.state.doctorList}
            vertical
            showsVerticalScrollIndicator={false}
            renderItem={this.renderItem}
            keyExtractor={(item, i) => i.toString()}
          />
         
       </View>
        </ScrollView>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Expert')}
         style={{height:40,width:150,borderRadius:20,backgroundColor:'#1a237e',alignSelf:'flex-end',bottom:70,marginRight:20,elevation:5 }}>
          <Text style={{color:'white',alignSelf:'center',fontSize:16,top:8}}>Need Expert ?</Text>
        </TouchableOpacity>
      </View>
    );
  }
  

  renderItem = ({item, index}) => (
    <View style={styles.verticalview}>
      <Image source={require('../assets/profile.png')} style={styles.horizontalimg} />
      <View style={styles.view}>
        <TouchableOpacity>
          <Text style={styles.verticaltext}>{item.fullName}</Text>
        </TouchableOpacity>
        
        <Text style={styles.subtitle}>{item.mobno}</Text>

        <Text numberOfLines={1} style={styles.subtitle}>{item.address}</Text>
        <Text numberOfLines={1} style={styles.subtitle}>{item._id}</Text>
        <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:15}}> 
          <TouchableOpacity
            onPress={() => {
              var phoneNumber = '';
              if (Platform.OS === 'android') {
                phoneNumber = 'tel:' + item.mobno;
              } else {
                phoneNumber = 'telprompt:' + item.mobno;
              }
              Linking.openURL(phoneNumber);
            }} style={{height:35,width:80,borderRadius:20,borderWidth:0.8, backgroundColor:'#1a237e',}}>
            <Text style={{alignSelf:'center',color:'#fff',top:6}}>Call now</Text>
        </TouchableOpacity>
        <TouchableOpacity  onPress={() => {
                  Alert.alert(
                    'Related Problem',
                    'Your problem is related to Animal Sick ',
                    [
                      {
                        text: 'No',
                        onPress: () => console.log('Cancel Pressed'),
                        style: 'cancel',
                      },
                      {
                        text: 'Yes',
                        onPress: () => {this.props.navigation.navigate('Success')},
                      },
                    ],
                    {cancelable: false},
                  );
                }}
        style={{height:35,width:80,borderRadius:20,borderWidth:0.8, backgroundColor:'#1a237e',}}>
            <Text style={{alignSelf:'center',color:'#fff',top:6}}>Request</Text>
        </TouchableOpacity>
        </View>
       
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {fontSize: 18, fontWeight: 'bold', marginTop: 12, marginStart: 15},
  flatlist: {marginStart: 17, marginEnd: 12, marginTop: 20},
  viewall: {color: 'grey', marginTop: 12, marginEnd: 15},
  verticaltext: {
    paddingStart: 5,
    marginTop: 7,

    fontWeight: 'bold',
    fontSize: 18,
    color: 'black',
  },
  view: {flex: 1, flexDirection: 'column', marginHorizontal: 20, marginTop: 10},
  price: {color: 'grey', paddingStart: 5, marginTop: 5},
  verticalimg: {
    borderRadius: 10,
    height: 100,
    marginHorizontal: 6,
    width: 100,
    resizeMode: 'contain',
  },
  verticalview: {
    flexDirection: 'row',
    height:180,
    justifyContent: 'space-between',
    marginVertical: 8,
    marginHorizontal: 6,
    elevation: 1,
    borderRadius: 0.8,
  },
  horizontalimg: {
    height: 150,
     resizeMode:'contain',
    width: 130,
  },
  subtitle: {
    color: 'black',
    paddingStart: 5,
    marginTop: 7,
  },
  icon: {
    fontSize: 26,
    marginTop: 10,

    aspectRatio: 1.5,

    alignSelf: 'center',
  },
  img: {
    flex: 0.7,
    height: 380,
    width: 400,
  },
  iconcart: {
    height: 22,
    marginTop: 10,
    marginStart: 10,

    width: 22,
  },
});
