import { Container, Input } from 'native-base';
import React from 'react';
import {
  View,
  TextInput,
  Text,
  ImageBackground,
  Dimensions,
  StatusBar,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';



import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Assets } from '../assets/index';
import { SliderBox } from 'react-native-image-slider-box';
import { ScrollView } from 'react-native-gesture-handler';
 const deviceWidth = Dimensions.get('window').width;

export default class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
     
    }

  }


  render() {
    return (
      <View style={{
        backgroundColor: '#f6f6f6',
        width: '100%',
        flex: 1,
        resizeMode: 'contain',
      }}>
        <Text>Wallet</Text>
              
      </View>
    );
  }

 
}

 
 

