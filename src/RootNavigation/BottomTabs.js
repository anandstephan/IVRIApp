import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Expert from '../Expert/Expert';
import Profile from '../Profile/Profile';
import Home from '../Home/Home';
import newCalls from '../NewCalls/newCalls';
import About from '../Drawer/About'
import Aboutyak from '../Drawer/Aboutyak'
import Author from '../Drawer/Author'
import Version from '../Drawer/Version'
import {DrawerContent} from '../Home/DrawerContent';

const Tab = createMaterialBottomTabNavigator();
const Drawer = createDrawerNavigator();

// const mapStateToProps = (state) => {
//   return {
//     cart: state.cart,
//   };
// };

class BottomTabs extends React.Component {
  render() {

    function DrawerRouter() {
      return (
        <Drawer.Navigator
          drawerStyle={{
            width: 275,
          }}
          overlayColor="transparent"
          drawerContent={(props) => <DrawerContent {...props} />}
          initialRouteName="Home">
          <Drawer.Screen name="Home" component={Home} />
          <Drawer.Screen name="About" component={About} />

          <Drawer.Screen name="Aboutyak" component={Aboutyak} />
          <Drawer.Screen name="Author" component={Author} />
          <Drawer.Screen name="Version" component={Version} />
          
        </Drawer.Navigator>
      );
    }
    return (
      <Tab.Navigator
        barStyle={{ backgroundColor: '#fff' }}
        activeColor="#1a237e"
        inactiveColor="#999"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, }) => {
            if (route.name === 'Home') {
              return (
                <Icon
                  name={focused ? 'home' : 'home-outline'}
                  size={23}
                  color={color}
                />
              );
            } else if (route.name === 'New Call') {
              return (
                <Icon
                  name={focused ? 'phone' : 'phone-outline'}
                  size={23}
                  color={color}
                />
              );
            } else if (route.name === 'Expert') {
              return (
                <>
                  <Icon
                    name={focused ? 'face-agent' : 'face-agent'}
                    size={23}
                    color={color}
                  />
                </>
              );
            }
           
            else if (route.name === 'Account') {
              return (
                <Icon
                  name={focused ? 'account-circle' : 'account-circle-outline'}
                  size={23}
                  color={color}
                />
              );
            }
          },
        })}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="New Call" component={newCalls} />
        <Tab.Screen name="Expert" component={Expert} />
        {/* <Tab.Screen name="Wallet" component={Wallet} /> */}
        <Tab.Screen name="Account" component={Profile} />
      </Tab.Navigator>
    );
  }
}

export default BottomTabs;
