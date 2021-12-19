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
import LinearGradient from 'react-native-linear-gradient'

export default function Splashscreen() {
  return (
    <Container
      style={{
        backgroundColor: '#90caf9',
        width: '100%',

        resizeMode: 'contain',
      }}>
      <StatusBar backgroundColor="#90caf9" barStyle="dark-content" />
      <LinearGradient
          colors={['#90caf9', '#1a237e'  ]}
          style={{   alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 5,
        flex:1}}
        >
      <View style={{flexDirection:'column', position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          justifyContent: 'center',
          alignItems: 'center',}}>  
      <View
        style={{
         
        }}>
        <Image
          style={{ height: 250, width: 200, alignSelf: 'center' }}
          source={Assets.logo}
        />
      </View>
      <View
        style={{
          alignItems: 'center',
          top:10,
        }}>
        <Text style={{ color: '#000064', fontSize: 24, fontWeight: 'bold' }}>
         On-Call Veterianry Health
        </Text>
        <Text style={{ color: '#000064', fontSize: 24, fontWeight: 'bold' }}>
          Sevice System
        </Text>


      </View>
      </View>    
</LinearGradient>

    </Container>
  );
}
