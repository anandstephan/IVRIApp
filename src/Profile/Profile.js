import moment from 'moment';
import React from 'react';
import {
  Dimensions, Image, StatusBar, Text, View
} from 'react-native';
import { connect } from 'react-redux';
import { Assets } from '../assets/index';
import { logOut } from '../Redux/Auth/ActionCreatore';



const deviceWidth = Dimensions.get('window').width;

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

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
        <StatusBar backgroundColor="#1a237e" barStyle="light-content" />
        <View style={{ height: 50, backgroundColor: '#1a237e' }}>
          <Text style={{ textAlign: 'center', color: 'white', fontSize: 20, top: 8 }}>Farmer Profile</Text>
        </View>


        <View style={{ flexDirection: 'row' }}>

          <View style={{ height: 110, width: 110, borderRadius: 180, backgroundColor: '#f6f6f6', marginTop: 16, marginLeft: 14 }}>
            <Image style={{ height: 110, width: 110, borderRadius: 180 }} source={Assets.profile} />

          </View>
          <View style={{ flexDirection: 'column' }}>
            <Text style={{ marginLeft: 20, marginTop: 20, fontSize: 16, fontWeight: 'bold' }}>Name : {data?.fullName}</Text>
            <View style={{ height: 1, backgroundColor: '#e0e0e0', marginLeft: 20, marginTop: 6 }}></View>
            <Text style={{ marginLeft: 20, marginTop: 10, fontSize: 16, fontWeight: 'bold' }}>Father's Name : {data?.fatherName}</Text>
            <View style={{ height: 1, backgroundColor: '#e0e0e0', marginLeft: 20, marginTop: 6 }}></View>
            <Text style={{ marginLeft: 20, marginTop: 10, fontSize: 16, fontWeight: 'bold' }}>DOB : {moment(data?.dob).format('DD/MMM/YYYY')} </Text>
            <View style={{ height: 1, backgroundColor: '#e0e0e0', marginLeft: 20, marginTop: 6 }}></View>
          </View>
        </View>
        <Text style={{ marginLeft: 20, marginTop: 20, fontSize: 16, fontWeight: 'bold' }}>Address : {data?.address}</Text>
        <View style={{ height: 1, backgroundColor: '#e0e0e0', marginLeft: 20, marginTop: 6 }}></View>
        {/* <Text style={{ marginLeft: 20, marginTop: 15, fontSize: 16, fontWeight: 'bold' }}>District : Bareilly</Text>
        <View style={{ height: 1, backgroundColor: '#e0e0e0', marginLeft: 20, marginTop: 6 }}></View>
        <Text style={{ marginLeft: 20, marginTop: 15, fontSize: 16, fontWeight: 'bold' }}>State : Uttar Pradesh</Text>
        <View style={{ height: 1, backgroundColor: '#e0e0e0', marginLeft: 20, marginTop: 6 }}></View> */}
        <Text style={{ marginLeft: 20, marginTop: 15, fontSize: 16, fontWeight: 'bold' }}>Addhar No : {data?.aadhar_number}</Text>
        <View style={{ height: 1, backgroundColor: '#e0e0e0', marginLeft: 20, marginTop: 6 }}></View>
        <Text style={{ marginLeft: 20, marginTop: 15, fontSize: 16, fontWeight: 'bold' }}>Email : {data?.email}</Text>
        <View style={{ height: 1, backgroundColor: '#e0e0e0', marginLeft: 20, marginTop: 6 }}></View>
        <Text style={{ marginLeft: 20, marginTop: 15, fontSize: 16, fontWeight: 'bold' }}>Mobile : {data?.mobile_number}</Text>
        <View style={{ height: 1, backgroundColor: '#e0e0e0', marginLeft: 20, marginTop: 6 }}></View>
        <Text style={{ marginLeft: 20, marginTop: 15, fontSize: 16, fontWeight: 'bold' }}>No Of animals holding : {data?.no_animal_holding}</Text>
        <View style={{ height: 1, backgroundColor: '#e0e0e0', marginLeft: 20, marginTop: 6 }}></View>
        <Text onPress={async() => {
          await this.props.logOut();
          await this.props.navigation.navigate('Login')
          }} style={{ marginLeft: 20, marginTop: 15, fontSize: 16, fontWeight: 'bold' }}>Log Out</Text>
        <View style={{ height: 1, backgroundColor: '#e0e0e0', marginLeft: 20, marginTop: 6 }}></View>



        <View style={{ flexDirection: 'row', marginTop: 170, paddingLeft: 10 }}>
          <Image
            style={{ height: 40, width: 40 }}
            source={Assets.logo}
          />
          <Text style={{ color: 'black', textAlign: 'center', marginTop: 10, fontSize: 14, marginLeft: 10 }}>ICAR - IVRI Izatnagar Bareilly</Text>
        </View>

      </View>

    );
  }


}
const mapStateToProps = state => {
  return {
    login: state.login,
    user:state.user
  };
};

const mapDispatchToProps = dispatch => ({


  logOut: () => dispatch(logOut()),

});

export default connect(mapStateToProps, mapDispatchToProps)(Home)



