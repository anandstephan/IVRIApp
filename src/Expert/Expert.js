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
import { ScrollView } from 'react-native-gesture-handler';
const deviceWidth = Dimensions.get('window').width;

export default class Expert extends React.Component {
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
                       <StatusBar backgroundColor="#1a237e" barStyle="light-content " />



                <View style={{ backgroundColor: '#1a237e' }}>
                    <View style={{flexDirection:'row',marginLeft: 8,  height:50}}>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('Home')}>
                        <Icon style={{ marginTop:10 }}
                            name="chevron-left"
                            size={28}
                            color='white'
                             
                            type="MaterialCommunityIcons" />
                    </TouchableOpacity>

                    <Text style={{ color: '#fff', fontSize: 20, fontWeight: 'bold',paddingStart:14, marginTop:10 }}>
                                Need Expert
                             </Text>
                             </View>   
                </View>
                <ScrollView>
                    <View style={{ }}>
                        {/* <View style={{height:5,backgroundColor:'#e5e5e5' }}></View> */}

                        <View style={{flexDirection:'row',marginHorizontal:40,marginTop:20,justifyContent:'space-between'}}>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('expertcall')}
                             style={{flexDirection:'column',marginHorizontal:0}}>
                        <View style={{height:120,width:120 ,borderRadius:180,backgroundColor:'white'}}>
                            <Image style={{height:120,width:120 ,borderRadius:180,}} source={Assets.repro}/>
                        </View>
                        <Text style={{fontSize:16,paddingStart:10,fontWeight:'bold',marginTop:14,alignSelf:'center'}}>
                          Reproductional
                        </Text>
                        </TouchableOpacity>
    
                        <View style={{flexDirection:'column',marginHorizontal:0}}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('expertcall')}
                         style={{height:120,width:120 ,borderRadius:180,backgroundColor:'grey'}}>
                        <Image style={{height:120,width:120 ,borderRadius:180,}} source={Assets.meditional}/>

                        </TouchableOpacity>
                        <Text style={{fontSize:16,paddingStart:10,fontWeight:'bold',marginTop:14,alignSelf:'center'}}>
                          Meditional
                        </Text>
                        </View>
                        
                        </View>

                        <View style={{flexDirection:'row',marginHorizontal:40,marginTop:30,justifyContent:'space-between'}}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('expertcall')} style={{flexDirection:'column',marginHorizontal:0}}>
                        <View style={{height:120,width:120 ,borderRadius:180,backgroundColor:'grey'}}>
                        <Image style={{height:120,width:120 ,borderRadius:180,}} source={Assets.surgery}/>

                        </View>
                        <Text style={{fontSize:16,paddingStart:10,fontWeight:'bold',marginTop:14,alignSelf:'center'}}>
                          Surgery
                        </Text>
                        </TouchableOpacity>
    
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('expertcall')} style={{flexDirection:'column',marginHorizontal:0}}>
                        <View style={{height:120,width:120 ,borderRadius:180,backgroundColor:'grey'}}>
                        <Image style={{height:120,width:120 ,borderRadius:180,}} source={Assets.para}/>

                        </View>
                        <Text style={{fontSize:16,paddingStart:10,fontWeight:'bold',marginTop:14,alignSelf:'center'}}>
                          Paravet
                        </Text>
                        </TouchableOpacity>
                        
                        </View>

                        <View style={{flexDirection:'row',marginHorizontal:40,marginTop:30,justifyContent:'space-between'}}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('expertcall')}style={{flexDirection:'column',marginHorizontal:0}}>
                        <View style={{height:120,width:120 ,borderRadius:180,backgroundColor:'grey'}}>
                        <Image style={{height:120,width:120 ,borderRadius:180,}} source={Assets.nutri}/>

                        </View>
                        <Text style={{fontSize:16,paddingStart:10,fontWeight:'bold',marginTop:14,alignSelf:'center'}}>
                          Nutrition
                        </Text>
                        </TouchableOpacity>
    
                         
                        
                        </View>

                       

                    </View>
                </ScrollView>
                {/* <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('BottomTabs')}>
                        <LinearGradient
                            colors={['#ec407a', '#ab47bc']}
                            start={{ x: 0, y: 0.5 }}
                            end={{ x: 1, y: 0.5 }}
                            style={{
                                marginTop: 70,
                                height: 40,
                                width: '90%',
                                alignSelf: 'center',
                                borderRadius: 5,
                            }}
                        >
                            <Text style={styles.filledbuttontext}>Continue</Text>
                        </LinearGradient>
                    </TouchableOpacity> */}
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

