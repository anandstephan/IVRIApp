import axios from 'axios';
import { Container, Input } from 'native-base';
import React from 'react';
import {
    Dimensions, Image, KeyboardAvoidingView, Platform, StatusBar, StyleSheet, Text, TouchableOpacity, View
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { registrationUrl } from '../../Utils/Api';
import { Assets } from '../assets/index';




const deviceWidth = Dimensions.get('window').width;
export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Test',
            email: 'trial@xyz.ccc',
            mobile: '1233211233',
            password: 'tester',
            fatherName: 'asd',
            aadhar: '123123213123',
            address: 'tesss',
            location: 'fasaf',
            dob: '22101967',
            numAnimal: 4
        }
    }
    registerUser = async () => {
        const { name, email, mobile, password, fatherName, aadhar, address, location, dob, numAnimal } = this.state;
        var url = registrationUrl;
        var body = {
            fullName: name,
            fatherName: fatherName,
            aadhar_number: aadhar,
            dob: dob,
            mobile_number: mobile,
            address: address,
            location: location,
            email: email,
            password: password,
            no_animal_holding: numAnimal
        };
        console.log('url and body of registration', url, body)
        await axios.post(url,body,{
          headers: {
            // "Authorization": "Bearer d484c6e730cc22caf59cce6ee33c6ed1142a56f77dee4ac6b86ea8341492e408",
            "Accept": "application/json",
            "Content-Type": "application/json"
          }
        })
        .then( (response)=> {
            
          console.log("response", JSON.stringify(response.data))
          this.props.navigation.navigate('Login');
        })
        .catch( (error)=> {
          console.log("error", error)
        })
    }
    render() {
        return (
            <Container
                style={{
                    backgroundColor: 'white',
                    width: '100%',
                    flex:1,
                    resizeMode: 'contain',
                }}>
                <StatusBar backgroundColor="#3949ab" barStyle="light-content" />

                <View style={{ backgroundColor: '#fff',flex:1 }}>

                    <LinearGradient
                        colors={['#3949ab', '#3949ab']}
                        start={{ x: 0, y: 0.5 }}
                        end={{ x: 1, y: 0.5 }}
                        style={{

                            height: 50,
                            width: '100%',
                            alignSelf: 'center',


                        }}

                    >
                        <Text style={{ color: '#fff', fontSize: 18, fontWeight: 'bold', alignSelf: 'center', marginTop: 10 }}>
                            On-Call Veterinary service system </Text>
                    </LinearGradient>

                    <ScrollView style={{ flex:1 }} showsVerticalScrollIndicator={false} keyboardShouldPersistTaps={'handled'}>
                        <KeyboardAvoidingView style={{flex:1}} behavior={'height'} >
                            <View
                                style={{
                                    height: 50,
                                    marginTop: 10,
                                    borderRadius: 5,
                                    borderColor: '#a7a7a7',
                                    backgroundColor: 'white',
                                }}>
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        marginBottom: 15,
                                        borderBottomWidth: 1,
                                        width: '90%',
                                        alignSelf: 'center',
                                        borderBottomColor: '#e5e5e5',
                                    }}>
                                    <Icon style={{ marginLeft: 8, marginTop: 8 }}
                                        name="rename-box"
                                        size={24}
                                        color='grey'
                                        type="MaterialCommunityIcons" />
                                    <Input
                                        keyboardType={'default'}
                                        onResponderStart={() =>
                                            this.setState({ down: false })
                                        }
                                        // maxLength={10}
                                        placeholder={'Name'}
                                        placeholderTextColor={'#e1e1e1'}
                                        onChangeText={(fullName) =>
                                            this.setState({ name: fullName })
                                        }
                                        style={{
                                            fontSize: 15,
                                            height: 40,
                                            right: 2,
                                            alignSelf: 'center',
                                            justifyContent: 'center',
                                            paddingLeft: 10,
                                        }}
                                    />
                                </View>
                            </View>
                            <View
                                style={{
                                    height: 50,
                                    marginTop: 5,
                                    borderRadius: 5,
                                    borderColor: '#a7a7a7',
                                    backgroundColor: 'white',
                                }}>
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        marginBottom: 15,
                                        borderBottomWidth: 1,
                                        width: '90%',
                                        alignSelf: 'center',
                                        borderBottomColor: '#e5e5e5',
                                    }}>
                                    <Icon style={{ marginLeft: 8, marginTop: 8 }}
                                        name="email"
                                        size={24}
                                        color='grey'
                                        type="MaterialCommunityIcons" />
                                    <Input
                                        keyboardType={'email-address'}
                                        onResponderStart={() =>
                                            this.setState({ down: false })
                                        }
                                        autoCapitalize={'none'}
                                        placeholder={'Email'}

                                        placeholderTextColor={'#e1e1e1'}
                                        onChangeText={(text) =>
                                            this.setState({ email: text })
                                        }
                                        style={{
                                            fontSize: 15,
                                            height: 40,
                                            right: 2,
                                            alignSelf: 'center',
                                            justifyContent: 'center',
                                            paddingLeft: 10,
                                        }}
                                    />
                                </View>
                            </View>
                            <View
                                style={{
                                    height: 50,
                                    marginTop: 5,
                                    borderRadius: 5,
                                    borderColor: '#a7a7a7',
                                    backgroundColor: 'white',
                                }}>
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        marginBottom: 15,
                                        borderBottomWidth: 1,
                                        width: '90%',
                                        alignSelf: 'center',
                                        borderBottomColor: '#e5e5e5',
                                    }}>
                                    <Icon style={{ marginLeft: 8, marginTop: 8 }}
                                        name="cellphone"
                                        size={24}
                                        color='grey'
                                        type="MaterialCommunityIcons" />
                                    <Input
                                        keyboardType={'number-pad'}
                                        onResponderStart={() =>
                                            this.setState({ down: false })
                                        }
                                        maxLength={10}
                                        placeholder={'Mobile'}
                                        placeholderTextColor={'#e1e1e1'}
                                        onChangeText={(txt) =>
                                            this.setState({ mobile: txt })
                                        }
                                        style={{
                                            fontSize: 15,
                                            height: 40,
                                            right: 2,
                                            alignSelf: 'center',
                                            justifyContent: 'center',
                                            paddingLeft: 10,
                                        }}
                                    />
                                </View>
                            </View>
                            <View
                                style={{
                                    height: 50,
                                    marginTop: 5,
                                    borderRadius: 5,
                                    borderColor: '#a7a7a7',
                                    backgroundColor: 'white',
                                }}>
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        marginBottom: 15,
                                        borderBottomWidth: 1,
                                        width: '90%',
                                        alignSelf: 'center',
                                        borderBottomColor: '#e5e5e5',
                                    }}>
                                    <Icon style={{ marginLeft: 8, marginTop: 8 }}
                                        name="lock"
                                        size={24}
                                        color='grey'
                                        type="MaterialCommunityIcons" />
                                    <Input
                                        keyboardType={'default'}
                                        onResponderStart={() =>
                                            this.setState({ down: false })
                                        }
                                        // maxLength={10}

                                        placeholder={'Password'}
                                        placeholderTextColor={'#e1e1e1'}
                                        onChangeText={(txt) =>
                                            this.setState({ password: txt })
                                        }
                                        style={{
                                            fontSize: 15,
                                            height: 40,
                                            right: 2,
                                            alignSelf: 'center',
                                            justifyContent: 'center',
                                            paddingLeft: 10,
                                        }}
                                    />
                                </View>
                            </View>
                            <View
                                style={{
                                    height: 50,
                                    marginTop: 5,
                                    borderRadius: 5,
                                    borderColor: '#a7a7a7',
                                    backgroundColor: 'white',
                                }}>
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        marginBottom: 15,
                                        borderBottomWidth: 1,
                                        width: '90%',
                                        alignSelf: 'center',
                                        borderBottomColor: '#e5e5e5',
                                    }}>
                                    <Icon style={{ marginLeft: 8, marginTop: 8 }}
                                        name="rename-box"
                                        size={24}
                                        color='grey'
                                        type="MaterialCommunityIcons" />
                                    <Input
                                        keyboardType={'default'}
                                        onResponderStart={() =>
                                            this.setState({ down: false })
                                        }
                                        // maxLength={10}
                                        placeholder={'Father name'}
                                        placeholderTextColor={'#e1e1e1'}
                                        onChangeText={(txt) =>
                                            this.setState({ fatherName: txt })
                                        }
                                        style={{
                                            fontSize: 15,
                                            height: 40,
                                            right: 2,
                                            alignSelf: 'center',
                                            justifyContent: 'center',
                                            paddingLeft: 10,
                                        }}
                                    />
                                </View>
                            </View>
                            <View
                                style={{
                                    height: 50,
                                    marginTop: 5,
                                    borderRadius: 5,
                                    borderColor: '#a7a7a7',
                                    backgroundColor: 'white',
                                }}>
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        marginBottom: 15,
                                        borderBottomWidth: 1,
                                        width: '90%',
                                        alignSelf: 'center',
                                        borderBottomColor: '#e5e5e5',
                                    }}>
                                    <Icon style={{ marginLeft: 8, marginTop: 8 }}
                                        name="format-list-numbered"
                                        size={24}
                                        color='grey'
                                        type="MaterialCommunityIcons" />
                                    <Input
                                        keyboardType={'number-pad'}
                                        onResponderStart={() =>
                                            this.setState({ down: false })
                                        }
                                        maxLength={12}
                                        placeholder={'Addhar number'}
                                        placeholderTextColor={'#e1e1e1'}
                                        onChangeText={(txt) =>
                                            this.setState({ aadhar: txt })
                                        }
                                        style={{
                                            fontSize: 15,
                                            height: 40,
                                            right: 2,
                                            alignSelf: 'center',
                                            justifyContent: 'center',
                                            paddingLeft: 10,
                                        }}
                                    />
                                </View>
                            </View>
                            <View
                                style={{
                                    height: 50,
                                    marginTop: 5,
                                    borderRadius: 5,
                                    borderColor: '#a7a7a7',
                                    backgroundColor: 'white',
                                }}>
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        marginBottom: 15,
                                        borderBottomWidth: 1,
                                        width: '90%',
                                        alignSelf: 'center',
                                        borderBottomColor: '#e5e5e5',
                                    }}>
                                    <Icon style={{ marginLeft: 8, marginTop: 8 }}
                                        name="map-marker"
                                        size={24}
                                        color='grey'
                                        type="MaterialCommunityIcons" />
                                    <Input
                                        keyboardType={'default'}
                                        onResponderStart={() =>
                                            this.setState({ down: false })
                                        }
                                        // maxLength={10}
                                        placeholder={'Address'}
                                        placeholderTextColor={'#e1e1e1'}
                                        onChangeText={(txt) =>
                                            this.setState({ address: txt })
                                        }
                                        style={{
                                            fontSize: 15,
                                            height: 40,
                                            right: 2,
                                            alignSelf: 'center',
                                            justifyContent: 'center',
                                            paddingLeft: 10,
                                        }}
                                    />
                                </View>
                            </View>
                            <View
                                style={{
                                    height: 50,
                                    marginTop: 5,
                                    borderRadius: 5,
                                    borderColor: '#a7a7a7',
                                    backgroundColor: 'white',
                                }}>
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        marginBottom: 15,
                                        borderBottomWidth: 1,
                                        width: '90%',
                                        alignSelf: 'center',
                                        borderBottomColor: '#e5e5e5',
                                    }}>
                                    <Icon style={{ marginLeft: 8, marginTop: 8 }}
                                        name="crosshairs-gps"
                                        size={24}
                                        color='grey'
                                        type="MaterialCommunityIcons" />
                                    <Input
                                        keyboardType={'deafult'}
                                        onResponderStart={() =>
                                            this.setState({ down: false })
                                        }
                                        // maxLength={10}
                                        placeholder={'Location'}
                                        placeholderTextColor={'#e1e1e1'}
                                        onChangeText={(txt) =>
                                            this.setState({ location: txt })
                                        }
                                        style={{
                                            fontSize: 15,
                                            height: 40,
                                            right: 2,
                                            alignSelf: 'center',
                                            justifyContent: 'center',
                                            paddingLeft: 10,
                                        }}
                                    />
                                </View>
                            </View>
                            <View
                                style={{
                                    height: 50,
                                    marginTop: 5,
                                    borderRadius: 5,
                                    borderColor: '#a7a7a7',
                                    backgroundColor: 'white',
                                }}>
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        marginBottom: 15,
                                        borderBottomWidth: 1,
                                        width: '90%',
                                        alignSelf: 'center',
                                        borderBottomColor: '#e5e5e5',
                                    }}>
                                    <Icon style={{ marginLeft: 8, marginTop: 8 }}
                                        name="cake"
                                        size={24}
                                        color='grey'
                                        type="MaterialCommunityIcons" />
                                    <Input
                                        keyboardType={'number-pad'}
                                        onResponderStart={() =>
                                            this.setState({ down: false })
                                        }
                                        maxLength={8}
                                        placeholder={'D.O.B'}
                                        placeholderTextColor={'#e1e1e1'}
                                        onChangeText={(txt) =>
                                            this.setState({ dob: txt })
                                        }
                                        style={{
                                            fontSize: 15,
                                            height: 40,
                                            right: 2,
                                            alignSelf: 'center',
                                            justifyContent: 'center',
                                            paddingLeft: 10,
                                        }}
                                    />
                                </View>
                            </View>
                            <View
                                style={{
                                    height: 50,
                                    marginTop: 5,
                                    borderRadius: 5,
                                    borderColor: '#a7a7a7',
                                    backgroundColor: 'white',
                                }}>
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        marginBottom: 15,
                                        borderBottomWidth: 1,
                                        width: '90%',
                                        alignSelf: 'center',
                                        borderBottomColor: '#e5e5e5',
                                    }}>
                                    <Icon style={{ marginLeft: 8, marginTop: 8 }}
                                        name="ticket-confirmation"
                                        size={24}
                                        color='grey'
                                        type="MaterialCommunityIcons" />
                                    <Input
                                        keyboardType={'number-pad'}
                                        onResponderStart={() =>
                                            this.setState({ down: false })
                                        }
                                        maxLength={3}
                                        placeholder={'No. Of animals holding'}
                                        placeholderTextColor={'#e1e1e1'}
                                        onChangeText={(txt) =>
                                            this.setState({ numAnimal: txt })
                                        }
                                        style={{
                                            fontSize: 15,
                                            height: 40,
                                            right: 2,
                                            alignSelf: 'center',
                                            justifyContent: 'center',
                                            paddingLeft: 10,
                                        }}
                                    />
                                </View>
                            </View>

                        </KeyboardAvoidingView>


                        <TouchableOpacity
                            onPress={() => this.registerUser()}>
                            <LinearGradient
                                colors={['#90caf9', '#1a237e']}
                                start={{ x: 0, y: 0.5 }}
                                end={{ x: 1, y: 0.5 }}
                                style={{
                                    marginTop: 20,
                                    height: 40,
                                    width: '85%',
                                    alignSelf: 'center',

                                    borderRadius: 8,
                                }}

                            >
                                <Text style={styles.filledbuttontext}>REGISTER</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                        <Text style={{ color: '#000', fontSize: 14, alignSelf: 'center', marginTop: 25 }}>
                            Already have an account ?
                        </Text>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}>
                            <Text style={{ color: '#ea0016', fontSize: 14, alignSelf: 'center', textDecorationLine: 'underline' }}>
                                LOGIN
                            </Text>
                        </TouchableOpacity>


                        <View style={{ flexDirection: 'row', marginTop: 90, paddingLeft: 10 }}>
                            <Image
                                style={{ height: 40, width: 40 }}
                                source={Assets.logo}
                            />
                            <Text style={{ color: 'black', textAlign: 'center', marginTop: 10, fontSize: 14, marginLeft: 10, textTransform: 'lowercase' }}>ICAR - IVRI Izatnagar Bareilly</Text>
                        </View>
                    </ScrollView>
                </View>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    input: {
        marginLeft: 12,
        width: deviceWidth / 1.2,
        height: 40,
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
    },

    emptybutton: {
        alignSelf: 'center',
        borderColor: '#e5e5e5',
        borderRadius: 5,
        height: 40,
        width: '85%',
        borderWidth: 0.8,
        justifyContent: 'center',
    },
    emptybuttontext: {
        textAlign: 'center',
        paddingLeft: 50,

        fontSize: 14,
        color: '#000',
    },
    filledbuttontext: {

        textAlign: 'center',
        alignSelf: 'center',
        top: 8,
        fontWeight: 'bold',
        fontSize: 17,
        color: 'white',
    },
});

