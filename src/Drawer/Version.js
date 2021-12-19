
 import React from 'react';
 import {
   View,
   Text,
   ImageBackground,
   Dimensions,
   StatusBar,
   Image,
 } from 'react-native';
 import { Assets } from '../assets/index';
 import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
 import { ScrollView } from 'react-native-gesture-handler';
 
 
 export default class Login extends React.Component {
     render(){
   return (
     <View  style={{ backgroundColor:'white',flex:1}}>
     <View style={{ backgroundColor:'white'}}>
         <StatusBar backgroundColor="#283593" barStyle="light-content" />
         <View style={{ flexDirection: 'row', backgroundColor: '#283593' , height: 45 }}>
           <Icon   onPress={() => this.props.navigation.navigate('Home')}  name="arrow-left" style={{ fontSize: 32, color: 'white', marginLeft: 10, marginTop: 4 }} />
           {/* <Text style={{ fontSize: 20, alignSelf: 'center', color: 'white', bottom: 5,marginLeft:12 }}>About Application</Text> */}
         </View>  
         <ScrollView  style={{ backgroundColor:'white'}} showsVerticalScrollIndicator={false}> 
         
 <Text style={{textAlign:'center',fontSize:22,fontWeight:'bold',marginTop:10,}}>About Application</Text>
                  <Text numberOfLines={25} style={{ marginRight: 10,alignSelf:'center',textAlign:'center',fontSize:16,marginTop:20,marginHorizontal:10 }}>Yaks play multidimensional socio-cultural-economic role for the pastoral nomads who rear yaks in the high reaches of Himalayan region mainly for earning their nutritional and livelihood security due to virtual inexistence of other agricultural activity in the high altitude where other bovines won’t survive or at least not without difficulty. It has been estimated that approximately 62% of their livelihood requirement is met from yak rearing. However, the drastic decline in yak population in India and all over the world has become serious concern to local users, Gov. Officials and to those who promote conservation of animal genetic diversity. This mobile app is an initiative to create awareness among the yak rearers as well as other stake holders in order to preserve these unique genetic resources and to promote scientific yak husbandry for their diversified use.  </Text>
                  <Text numberOfLines= {3} style={{fontWeight:'bold',fontSize:22,color:'#1a237e',alignSelf:'center',textAlign:'center',marginHorizontal:8,marginBottom:0,marginTop:10}}>Designed By </Text> 

                  <Image style={{ width:'95%',alignSelf:'center',resizeMode:'contain',height:150,marginTop:10}} source={require('../assets/logo.png')}/>

                  <Text numberOfLines= {3} style={{fontWeight:'bold',fontSize:22,color:'#1a237e',alignSelf:'center',textAlign:'center',marginHorizontal:8,marginBottom:0,marginTop:10}}>ARIS Cell IVRI-ICAR Izzatnagar,Bareilly,Uttar Pradesh 243122</Text> 

         </ScrollView>
          </View>
          </View>
   );
     }
 }
 