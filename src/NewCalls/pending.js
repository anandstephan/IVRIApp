
import React from 'react';
import { View, StyleSheet, Dimensions,Container,StatusBar,
Text,Picker ,Image,TouchableHighlight,Alert,ScrollView,FlatList,Linking,
TouchableOpacity,Title,Caption,Drawer,Avatar,ActivityIndicator } from 'react-native';
import { Assets } from '../assets/index';  
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'                       

export default class completed extends React.Component {
  constructor(props)
 {

   super(props);

   this.state = { 

   isLoading: true,

   PickerValueHolder : ''

  }
 }


    render() {
      return (
          
       <View>
                  <View
        style={{
         
          height:60,
           
          backgroundColor:'#1a237e',
          alignItems: 'center',
        }}>
          <View  style={{flexDirection:'row',alignSelf:'flex-start',marginHorizontal:10 }}>
            <Icon onPress={() => this.props.navigation.navigate('Home')}
                  style={{  color: 'white',
                  fontSize: 24,                 
                  marginTop:15
                   }}
                  name="arrow-left"
                 /> 
                  <Text style={{ color: 'white', fontSize: 22, marginTop:12,marginLeft:70 }}>
                    Completed Calls
                    </Text>
                    </View>
      </View> 
        <ScrollView style={{marginBottom:70}}> 
          <FlatList
            style={{
              marginHorizontal: 5,
            }}
            data={[
              {
            
              
                Callno: '1',
                Species:"Dog",              
                Problem: 'Animal Sick',
                level:'Fever',
                Name:'Dr.Yashpal Singh',
                Address:'IVRI Izzatnagar',
                Number:'9825383527',
                date:'28-07-2021',
                status:'Pending'
                
             },
             {
            
              
                Callno: '1',
                Species:"Dog",              
                Problem: 'Animal Sick',
                level:'Fever',
                Name:'Dr.Yashpal Singh',
                Address:'IVRI Izzatnagar',
                Number:'9825383527',
                date:'28-07-2021',
                status:'Pending'
                
             },
             {
            
              
                Callno: '1',
                Species:"Dog",              
                Problem: 'Animal Sick',
                level:'Fever',
                Name:'Dr.Yashpal Singh',
                Address:'IVRI Izzatnagar',
                Number:'9825383527',
                date:'28-07-2021',
                status:'Pending'
                
             },
           
            ]}
            vertical
            showsVerticalScrollIndicator={false}
            renderItem={this.renderItem}
            keyExtractor={(item, i) => i.toString()}
          />
        </ScrollView>
        

  
   </View>
   
      );
  }
  renderItem = ({item, index}) => (
    <View style={styles.verticalview}>
      
      <View style={styles.view}>
        <TouchableOpacity>
          <Text style={styles.verticaltext}>Call no: {item.Callno}</Text>
        </TouchableOpacity>
        
        <Text style={styles.subtitle}>Species : {item.Species}</Text>
        <Text style={styles.subtitle}>Problem : {item.Problem}</Text>
        <Text style={styles.subtitle}>Problem level: {item.level}</Text>
        <Text style={styles.subtitle}>Dr.Name : {item.Name}</Text>
        <Text style={styles.subtitle}>Dr. Address : {item.Address}</Text>
        <Text style={styles.subtitle}>Dr Number : {item.Number}</Text>
        <Text style={styles.subtitle}>Call Date : {item.date}</Text>
        <Text style={styles.subtitle}>Status : {item.status}</Text>


        
       
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
       paddingTop: 300
    },
    input: {
        borderRadius:10,
       margin: 15,
       height: 50,
       borderColor: '#000',
       borderWidth: 1
    },
    submitButton: {
        backgroundColor: '#03a9f4',
        
        marginTop:14,
        
        height: 45,  borderRadius:10,
     },
     submitButtonText:{
         top:10,
         alignSelf:'center',
          fontSize:16,
          color: 'white',
      
     },
    heading: {fontSize: 18, fontWeight: 'bold', marginTop: 12, marginStart: 15},
    flatlist: {marginStart: 17, marginEnd: 12, marginTop: 20},
    viewall: {color: 'grey', marginTop: 12, marginEnd: 15},
    verticaltext: {
      paddingStart: 5,
      marginTop: 7,
  
      fontWeight: 'bold',
      fontSize: 18,
      color: 'black',
    },
    view: {flex: 1, flexDirection: 'column', marginHorizontal: 20, marginTop: 10},
    price: {color: 'grey', paddingStart: 5, marginTop: 5},
    verticalimg: {
      borderRadius: 10,
      height: 100,
      marginHorizontal: 6,
      width: 100,
      resizeMode: 'contain',
    },
    verticalview: {
      flexDirection: 'row',
      height:260,
      justifyContent: 'space-between',
      marginVertical: 8,
      marginHorizontal: 6,
      elevation: 1,
      borderRadius: 0.8,
    },
    horizontalimg: {
      height: 150,
       resizeMode:'contain',
      width: 130,
    },
    subtitle: {
      color: 'black',
      
      paddingStart: 5,
      marginTop: 7,
    },
    icon: {
      fontSize: 26,
      marginTop: 10,
  
      aspectRatio: 1.5,
  
      alignSelf: 'center',
    },
    img: {
      flex: 0.7,
      height: 380,
      width: 400,
    },
    iconcart: {
      height: 22,
      marginTop: 10,
      marginStart: 10,
  
      width: 22,
    },
 })
