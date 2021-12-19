import { Container, Input } from 'native-base';
import React from 'react';
import {
    View,
    TextInput,
    Text,
    ImageBackground,
    Dimensions,
    StatusBar,
    TouchableOpacity,
    Image,
    StyleSheet,
} from 'react-native';



import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Assets } from '../assets/index';
import LinearGradient from 'react-native-linear-gradient'
const deviceWidth = Dimensions.get('window').width;


export default class Otp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

            mobile: '',

        };
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
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('Login')}>
                        <Icon style={{ marginLeft: 8, marginTop: 10 }}
                            name="chevron-left"
                            size={35}
                            type="MaterialCommunityIcons" />
                    </TouchableOpacity>

                    <View style={{ flexDirection: 'column', marginTop: 40 }}>

                        <View
                            style={{
                                alignItems: 'center',
                                bottom: 20

                            }}>
                            <Text style={{ color: '#000', fontSize: 24, fontWeight: 'bold' }}>
                                Verify Details
                             </Text>

                            


                        </View>
                    </View>

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
                                name="lock"
                                size={24}
                                color='grey'
                                type="MaterialCommunityIcons" />
                            <Input
                                keyboardType={'number-pad'}
                                onResponderStart={() =>
                                    this.setState({ down: false })
                                }
                                maxLength={10}
                                placeholder={'Enter Old Password'}
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
                                name="lock"
                                size={24}
                                color='grey'
                                type="MaterialCommunityIcons" />
                            <Input
                                keyboardType={'number-pad'}
                                onResponderStart={() =>
                                    this.setState({ down: false })
                                }
                                maxLength={10}
                                placeholder={'New Password'}
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
                                name="lock"
                                size={24}
                                color='grey'
                                type="MaterialCommunityIcons" />
                            <Input
                                keyboardType={'number-pad'}
                                onResponderStart={() =>
                                    this.setState({ down: false })
                                }
                                maxLength={10}
                                placeholder={'Confirm Password'}
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

                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('Login')}>
                        <LinearGradient
                            colors={['#90caf9', '#1a237e']}
                            start={{ x: 0, y: 0.5 }}
                            end={{ x: 1, y: 0.5 }}
                            style={{
                                marginTop: 50,
                                height: 40,
                                width: '85%',
                                alignSelf: 'center',
                                borderRadius: 5,
                            }}
                        >
                            <Text style={styles.filledbuttontext}>Change Password</Text>
                        </LinearGradient>
                    </TouchableOpacity>
 
                </View>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    input: {
        marginLeft: 12,
        width: deviceWidth / 2,
        height: 40,

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

