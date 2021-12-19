import { Container } from 'native-base';
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


export default class Login extends React.Component {
    render(){
  return (
    <View>
 <StatusBar backgroundColor="#283593" barStyle="light-content" />
        <View style={{ flexDirection: 'row', backgroundColor: '#283593', justifyContent: 'space-between', height: 45 }}>
          <Icon   onPress={() => this.props.navigation.navigate('Home')}  name="arrow-left" style={{ fontSize: 32, color: 'white', marginLeft: 10, marginTop: 4 }} />
          <Text style={{ fontSize: 20, alignSelf: 'center', color: 'white', bottom: 5 }}>Author</Text>
          <Icon name="information" style={{ fontSize: 28, color: 'white', marginTop: 6, marginRight: 10 }} />

        </View>   
         </View>
  );
    }
}
