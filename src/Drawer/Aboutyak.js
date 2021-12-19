import { Container } from 'native-base';
import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  Dimensions,
  StyleSheet,
  StatusBar,
  Image,
  TouchableOpacity
} from 'react-native';
import { Assets } from '../assets/index';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { ScrollView } from 'react-native-gesture-handler';


export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          
        };
      }
    render(){
  return (
    <View>
          <StatusBar backgroundColor="#283593" barStyle="light-content" />
        <View style={{ flexDirection: 'row', backgroundColor: '#283593', justifyContent: 'space-between', height: 45 }}>
          <Icon   onPress={() => this.props.navigation.navigate('Home')}  name="arrow-left" style={{ fontSize: 32, color: 'white', marginLeft: 10, marginTop: 4 }} />
          <Text style={{ fontSize: 20, alignSelf: 'center', color: 'white', bottom: 5 }}>About YAK</Text>
          <Icon   onPress={() => this.props.navigation.navigate('Version')}   name="information" style={{ fontSize: 28, color: 'white', marginTop: 6, marginRight: 10 }} />

        </View>
        <ScrollView>
         <View style={{flexDirection:'row'}}>
        <TouchableOpacity
         onPress={() => this.props.navigation.navigate('Intro')} 
               style = {styles.submitButton}>
                   <View style={{flexDirection:'column', }}>
                   {/* <Image style={{height:60,width:90,alignSelf:'center',marginTop:16}} source={require('../assets/')}/> */}

               <Text style = {styles.submitButtonText}> Introduction </Text>
               {/* <Icon    name="chevron-right" style={{ fontSize: 26, color: 'black' , marginTop: 10,marginRight:10 }} /> */}
               </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Economic')} 
               style = {styles.submitButton}>
                   <View style={{flexDirection:'column', }}>
                   <Image style={{height:60,width:90,alignSelf:'center',marginTop:16}} source={require('../assets/b1.jpg')}/>
               <Text numberOfLines={1} style = {styles.submitButtonText}> Economic importance of yak </Text>
               {/* <Icon    name="chevron-right" style={{ fontSize: 26, color: 'black' , marginTop: 10,marginRight:10 }} /> */}
               </View>
            </TouchableOpacity>
            </View>
            <View style={{flexDirection:'row'}}>

            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Challenges')} 
               style = {styles.submitButton}>
                   <View style={{flexDirection:'column', }}>
                   <Image style={{height:60,width:90,alignSelf:'center',marginTop:16}} source={require('../assets/b1.jpg')}/>
               <Text numberOfLines={1} style = {styles.submitButtonText}> Challenges in Yak husbandry </Text>
               {/* <Icon    name="chevron-right" style={{ fontSize: 26, color: 'black' , marginTop: 10,marginRight:10 }} /> */}
               </View>
            </TouchableOpacity>
            <TouchableOpacity
                          onPress={() => this.props.navigation.navigate('Management')} 

               style = {styles.submitButton}>
                  <View style={{flexDirection:'column', }}>
                   <Image style={{height:60,width:90,alignSelf:'center',marginTop:16}} source={require('../assets/b1.jpg')}/>
               <Text style = {styles.submitButtonText}> Yak management  </Text>
               {/* <Icon    name="chevron-right" style={{ fontSize: 26, color: 'black' , marginTop: 10,marginRight:10 }} /> */}
               </View>
            </TouchableOpacity>
            </View>
            <View style={{flexDirection:'row'}}>

            <TouchableOpacity
               onPress={() => this.props.navigation.navigate('practices')} 
               style = {styles.submitButton}>
                   <View style={{flexDirection:'column', }}>
                   <Image style={{height:60,width:90,alignSelf:'center',marginTop:16}} source={require('../assets/b1.jpg')}/>
               <Text style = {styles.submitButtonText}> Yak rearing practices </Text>
               {/* <Icon    name="chevron-right" style={{ fontSize: 26, color: 'black' , marginTop: 10,marginRight:10 }} /> */}
               </View>
            </TouchableOpacity>
            <TouchableOpacity
               onPress={() => this.props.navigation.navigate('production')} 
               style = {styles.submitButton}>
                    <View style={{flexDirection:'column', }}>
                   <Image style={{height:60,width:90,alignSelf:'center',marginTop:16}} source={require('../assets/b1.jpg')}/>
               <Text style = {styles.submitButtonText}> Yak production </Text>
               {/* <Icon    name="chevron-right" style={{ fontSize: 26, color: 'black' , marginTop: 10,marginRight:10 }} /> */}
               </View>
            </TouchableOpacity>
            </View>
            <TouchableOpacity
               onPress={() => this.props.navigation.navigate('Yakeco')} 
               style = {styles.submitButton}>
                   <View style={{flexDirection:'column', }}>
                   <Image style={{height:60,width:90,alignSelf:'center',marginTop:16}} source={require('../assets/b1.jpg')}/>
               <Text style = {styles.submitButtonText}> Yak economics  </Text>
               {/* <Icon    name="chevron-right" style={{ fontSize: 26, color: 'black' , marginTop: 10,marginRight:10 }} /> */}
               </View>
            </TouchableOpacity>
          
           
            </ScrollView>
    </View>
  );
    }
}

const styles = StyleSheet.create({
  
    submitButton: {
        marginTop:10,
       backgroundColor: '#fff',
       marginHorizontal:8,
       elevation:1,
       width:'45%',
        height: 120,  borderRadius:10,
    },
    submitButtonText:{
          fontSize:16,
          paddingLeft:10,
          top:10,
          alignSelf:'center',
          color: 'black',

     
    }
 })
