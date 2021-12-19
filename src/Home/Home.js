import React from 'react';
import {
  Dimensions, Image, StatusBar, StyleSheet, Text, TouchableOpacity, View
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SliderBox } from 'react-native-image-slider-box';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { connect } from 'react-redux';
import { Assets } from '../assets/index';

const deviceWidth = Dimensions.get('window').width;

 class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      images: [
        require('../assets/b1.png'),
        require('../assets/b2.jpeg'),
        require('../assets/b3.jpeg'),

      ]
    }

  }


  render() {
    
    const{data} = this.props.user;
    
    return (
      <View style={{
        backgroundColor: '#f6f6f6',
        width: '100%',
        flex: 1,
        resizeMode: 'contain',
      }}>
        <View
          style={{
            backgroundColor: 'white',
            width: '100%',
            resizeMode: 'contain',
          }}>
          <StatusBar backgroundColor="#1a237e" barStyle='light-content' />
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <View style={{ flexDirection: 'row' ,height:50,backgroundColor:'#1a237e',width:'100%'}}>
            <Icon onPress={ () =>{
              // this.props.navigation.openDrawer()
            }}
              style={{ marginTop:10 ,marginLeft:14 }}
                name="menu"
                size={28}
                color='#fff'
                type="MaterialCommunityIcons" />
              <Text style={{ color: '#fff', fontSize: 18, fontWeight: 'bold', alignSelf: 'center', textAlign:'center',marginLeft:16 ,marginTop:0}}>
              On-Call Veterinary service system
          </Text>
            </View>
           
          </View>
          </View>
         
          <ScrollView  >
            <View style={{backgroundColor:'white'}}>
          
          <SliderBox

            images={this.state.images}
            sliderBoxHeight={190}
            
            dotColor="#ea0016"
            inactiveDotColor="#90A4AE"
            paginationBoxVerticalPadding={20}
            autoplay
            circleLoop
            dotStyle={{
              width: 10,
              height: 10,
              backgroundColor: 'white',
            }}
            ImageComponentStyle={{
              alignSelf: 'center',

              width: '97%',
              marginTop: 15,
            }}
          />
 
          </View>

          <View style={{ flexDirection:'row',justifyContent:"space-between"}}>
        
       
        <View style={{flexDirection:'column'}}>
        <Text style={{marginLeft:20,marginTop:15,fontSize:16,fontWeight:'bold'}}>{data?.fullName}</Text>
          
         
          <View style={{height:1,backgroundColor:'#e0e0e0',marginLeft:20,marginTop:0,width:'30%'}}></View>
          <Text style={{marginLeft:20,marginTop:20,fontSize:16,fontWeight:'bold'}}>{data?.mobile_number}</Text>
          <View style={{height:1,backgroundColor:'#e0e0e0',marginLeft:20,marginTop:6,width:'30%'}}></View>
          
         
          
          <Text style={{marginLeft:20,marginTop:15,fontSize:16,fontWeight:'bold'}}>{data?.email}</Text>
          <View style={{height:1,backgroundColor:'#e0e0e0',marginLeft:20,marginTop:6,width:'30%'}}></View>
          <Text style={{marginLeft:20,marginTop:15,fontSize:16,fontWeight:'bold',width:'60%'}}>{data?.address}</Text>
          <View style={{height:1,backgroundColor:'#e0e0e0',marginLeft:20,marginTop:6,width:'60%'}}></View>
        
        </View>
        <View style={{height:160,width:140,borderRadius:20,backgroundColor:'grey',marginTop:16,right:10}}>
          <Image style={{height:160,width:140,borderRadius:20 }} source={Assets.p2}/>

        </View> 
        </View>

        
        <View style={{ flexDirection:'row',marginTop:10,marginHorizontal:8}}>
        
        <TouchableOpacity onPress={() => this.props.navigation.navigate('completed')} 
        style={{height:110,width:170,borderRadius:20,backgroundColor:'white',marginTop:16,marginLeft:14,elevation:0.7}}>
        <Image style={{height:60,width:60,borderRadius:10,alignSelf:'center',top:10 }} source={Assets.complete}/>
        <Text style={{ marginTop:15,fontSize:14,fontWeight:'bold',textAlign:'center',color:'#1a237e'}}>Completed Calls</Text>
        
        </TouchableOpacity>


        <TouchableOpacity onPress={() => this.props.navigation.navigate('pending')} 
         style={{height:110,width:170,borderRadius:20,backgroundColor:'white',marginTop:16,marginLeft:14,elevation:0.7}}>
        <Image style={{height:60,width:60,borderRadius:10,alignSelf:'center',top:10 }} source={Assets.pending}/>
        <Text style={{ marginTop:15,fontSize:14,fontWeight:'bold',textAlign:'center',color:'#1a237e'}}>Pending Calls</Text>

        
        
        </TouchableOpacity>

        
 
        
       
         
        </View>
        <TouchableOpacity  onPress={() => this.props.navigation.navigate('New Call')} 
        style={{height:110,width:'90%',borderRadius:20,backgroundColor:'white',marginTop:16,marginLeft:22,elevation:0.7,marginBottom:50}}>
        <Image style={{height:60,width:60,borderRadius:10,alignSelf:'center',top:10 }} source={Assets.newcall}/>
        <Text style={{ marginTop:15,fontSize:14,fontWeight:'bold',textAlign:'center',color:'#1a237e'}}>Make a New Call</Text>

        
        
        </TouchableOpacity>
       
        </ScrollView>


 
              
      </View>
    );
  }

   
}
const mapStateToProps = state => {
  return {
  login:state.login,
  user:state.user
  };
  
};
export default connect(mapStateToProps)(Home)
const styles = StyleSheet.create({
  
  flatistview: {
    marginTop:10,
    backgroundColor:'white',
    elevation:1,
    flexDirection: 'column',
    marginVertical: 4,
    padding: 5,
    elevation: 0.5,
    borderWidth: 0.1,
    marginHorizontal: 6,
    height: 150,
    width:100
  },
  img: {
    resizeMode:'contain',
    alignSelf:'center',
    height: 100,
    marginTop:5,
    width: 120,
  },
  title: {
    paddingStart: 5,
    marginTop: 5,
    fontSize: 12,
    color: 'black',
  },
  subtittle: {color: '#ea0016', paddingStart: 5,  fontSize:10},
});

