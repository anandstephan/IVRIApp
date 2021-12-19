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
          <Text style={{ fontSize: 20, alignSelf: 'center', color: 'white', bottom: 5 }}>About Application</Text>
          <Icon name="information" style={{ fontSize: 28, color: 'white', marginTop: 6, marginRight: 10 }} />

        </View>
    </View>
  );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal:6,
       paddingTop: 70
    },
    input: {
        borderRadius:10,
       margin: 10,
       height: 45,
       borderColor: '#000',
       borderWidth: 0.5
    },
    submitButton: {
       backgroundColor: '#004d40',
       padding: 10,
       margin: 15,
       height: 50,  borderRadius:10,
    },
    submitButtonText:{
        top:3,
        fontSize:16,
        alignSelf:'center',
       color: 'white',
     
    }
 })
