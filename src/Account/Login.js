import axios from 'axios';
import { Container, Input } from 'native-base';
import React from 'react';
import {
    Dimensions, Image, StatusBar, StyleSheet, Text, TouchableOpacity, View
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { ActivityIndicator } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { connect } from 'react-redux';
import { loginUrl } from '../../Utils/Api';
import { Assets } from '../assets/index';
import { addProfile, loginFail, loginSuccess } from '../Redux/Auth/ActionCreatore';




const deviceWidth = Dimensions.get('window').width;

class Login extends React.Component {

    constructor(props) {

        super(props)

        this.state = {

            email: '',
            password: '',
            isLoading: false
        }

    }

    UserLoginFunction = async () => {
        this.setState({
            isLoading: true
        })
        const { email, password } = this.state;
        var body = {
            "email": email,
            "password": password
        }
        var url = loginUrl;
        await axios.post(url, body, {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        }).then(async (response) => {

            if (response.status == '200') {
                var userObject = {
                    accessToken: response.data.token,
                    userId: response.data._id.toString(),
                    username: response.data.fullName, r
                };
                await this.props.addProfile(response.data)
                await this.props.loginSuccess(userObject);
                this.props.navigation.navigate('Home');
                this.setState({ isLoading: false })
            }
        }).catch((err) => {
            this.setState({ isLoading: false })
            console.log('err', err)
        })
    }


    render() {
        return (
            <Container
                style={{
                    backgroundColor: 'white',
                    width: '100%',

                    resizeMode: 'contain',
                }}>
                <StatusBar backgroundColor="white" barStyle="dark-content" />

                <View style={{ backgroundColor: '#fff' }}>
                    {/* <Icon style={{ marginLeft: 8, marginTop: 10 }}
                        name="chevron-left"
                        size={30}
                        type="MaterialCommunityIcons" /> */}

                    <View style={{ flexDirection: 'column', marginTop: 60 }}>
                        <View
                            style={{

                            }}>
                            <Image
                                style={{ height: 150, width: 150, alignSelf: 'center' }}
                                source={Assets.logo}
                            />
                        </View>
                        <View
                            style={{
                                alignItems: 'center',
                                bottom: 0

                            }}>
                            <Text style={{ color: '#1a237e', fontSize: 16, fontWeight: 'bold' }}>
                                On-Call Veterinary service system
                            </Text>
                            {/* <Text style={{ color: '#000', fontSize: 12 }}>
                            On-Call Veterinary service system
                             </Text> */}


                        </View>
                    </View>


                    <View
                        style={{
                            height: 50,
                            marginTop: 55,
                            borderRadius: 5,
                            borderColor: '#a7a7a7',
                            backgroundColor: 'white',
                        }}>
                        {/* <Text style={{paddingLeft:60,color:'grey',fontSize:12}}>Email</Text> */}
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
                                onChangeText={email => this.setState({ email })}

                                placeholder={'Email'}
                                placeholderTextColor={'#e1e1e1'}
                                // onChangeText={(txt) =>
                                //     this.setState({ mobile: txt })
                                // }
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
                            marginTop: 30,
                            borderRadius: 5,
                            borderColor: '#a7a7a7',
                            backgroundColor: 'white',
                        }}>
                        {/* <Text style={{paddingLeft:60,color:'grey',fontSize:12}}>Password</Text> */}
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
                            {/* <Text
                                style={{
                                    color: 'grey',
                                    backgroundColor: 'white',
                                    paddingHorizontal: 10,
                                    fontSize: 15,
                                    marginTop: 9,
                                    width: '20%',
                                }}>
                                +91{'  '}
                            </Text> */}

                            <Input
                                keyboardType={'default'}
                                onResponderStart={() =>
                                    this.setState({ down: false })
                                }
                                secureTextEntry
                                autoCapitalize={'none'}
                                onChangeText={password => this.setState({ password })}
                                placeholder={'Password'}
                                placeholderTextColor={'#e1e1e1'}
                                // onChangeText={(txt) =>
                                //     this.setState({ mobile: txt })
                                // }
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

                    <TouchableOpacity
                        onPress={this.UserLoginFunction}
                    >
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
                            {this.state.isLoading ?
                                <ActivityIndicator
                                    size={'small'}
                                    color={'white'}
                                    style={{ justifyContent: 'center', alignSelf: "center", alignContent: "center" }}
                                />
                                :
                                <Text style={styles.filledbuttontext}>LOGIN </Text>}



                        </LinearGradient>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Forgotpass')}
                    >

                        <Text style={{ color: '#000', textAlign: 'right', marginTop: 10, marginRight: 25 }}> Forgot Password ?  </Text>
                    </TouchableOpacity>

                    <View style={{ alignSelf: 'center', flexDirection: 'row', marginTop: 30 }}>
                        <View style={{ borderWidth: 0.5, width: 9, alignSelf: 'center', marginHorizontal: 6, color: 'grey' }}></View>
                        <Text style={{ color: 'grey' }}>OR</Text>
                        <View style={{ borderWidth: 0.5, width: 9, alignSelf: 'center', marginHorizontal: 6, color: 'grey' }}></View>
                    </View>


                    <Text style={{ color: '#000', fontSize: 14, alignSelf: 'center', marginTop: 25 }}>
                        Don't have account ?
                    </Text>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Register')}>
                        <Text style={{ color: '#ea0016', fontSize: 14, alignSelf: 'center', textDecorationLine: 'underline' }}>
                            SIGNUP
                        </Text>
                    </TouchableOpacity>


                    <View style={{ flexDirection: 'row', marginTop: 90, paddingLeft: 10 }}>
                        <Image
                            style={{ height: 40, width: 40 }}
                            source={Assets.logo}
                        />
                        <Text style={{ color: 'black', textAlign: 'center', marginTop: 10, fontSize: 14, marginLeft: 10, textTransform: 'uppercase' }}>ICAR - IVRI Izatnagar Bareilly</Text>
                    </View>
                </View>
            </Container>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        login: state.login,
    };
};

const mapDispatchToProps = (dispatch) => ({
    loginSuccess: (userData) => dispatch(loginSuccess(userData)),
    addProfile: (userData) => dispatch(addProfile(userData)),
    loginFail: () => dispatch(loginFail()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Login);

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

