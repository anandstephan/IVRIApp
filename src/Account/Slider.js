import React from 'react';
import {
  Image,
  Text,
  View,
  Skip,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';

const slides = [
  {
    key: 'one',
    title: 'Start your Business with zero Investment',
    text: 'Shop the best deals from your nearest store',
    image: require('../assets/img3.png'),
  },
  {
    key: 'two',
    title: 'No more trips to the store',
    text: 'Shop the best deals from your nearest store',
    image: require('../assets/img4.png'),
  },
  {
    key: 'three',
    title: 'Door step delivery',
    text: 'Shop the best deals from your nearest store',
    image: require('../assets/img2.png'),
  },
];

export default class Slides extends React.Component {
  state = {showHomePage: false};
  _renderItem = ({item}) => {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="white" barStyle="dark-content" />

        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Login')}>
          {/* <Text style={styles.skip}>Skip</Text> */}
          <Image style={styles.logo} source={item.image} />
          <Text style={styles.tittletext}>{item.title}</Text>
          <Text style={styles.textcontainer}>{item.text}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  render() {
    if (this.state.showHomePage) {
      return <Slides />;
    } else
      return (
        <AppIntroSlider
          renderItem={this._renderItem}
          data={slides}
          renderDoneButton={this._renderDoneButton}
          renderNextButton={this._renderNextButton}
          activeDotStyle={{
            backgroundColor: '#B72304',
            width: 10,
          }}
        />
      );
  }
  _renderNextButton = () => {
    return (
      <View>
        <Text style={styles.done}>Next</Text>
      </View>
    );
  };
  _renderDoneButton = () => {
    return (
      <View>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Login')}>
          <Text style={styles.done}>Done</Text>
        </TouchableOpacity>
      </View>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  logo: {
      marginTop:25,
    height: '65%',
    width: '100%',
    alignSelf:'center'
   
  },
  tittletext: {
    paddingTop: 25,
    paddingBottom: 10,
    fontSize: 23,
    fontWeight: 'bold',
    color: '#21465b',
    textAlign: 'center',
    alignSelf: 'center',
  },
  textcontainer: {
    textAlign: 'center',
    color: '#b5b5b5',
    fontSize: 15,
    paddingHorizontal: 30,
  },
  skip: {
    fontSize: 12,
    color: 'white',
    marginEnd: 16,
    alignSelf: 'center',

    borderRadius: 40,
    height: 25,
    alignSelf: 'flex-end',
    width: 60,
    textAlign: 'center',
    borderRadius: 30,
    padding: 4,

    marginTop: 15,

    backgroundColor: '#B72304',
    alignSelf: 'flex-end',
  },
  done: {padding: 15, color: 'grey', fontSize: 17},
});
