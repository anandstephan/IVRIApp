import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { connect } from 'react-redux';
import Forgotpass from '../Account/Forgotpass';
// import Slider from '../Account/Slider';
import Login from '../Account/Login';
import Register from '../Account/Register';
import Contactlist from '../Contactlist/Contactlist';
import expertcall from '../Expert/expertCall';
import completed from '../NewCalls/completed';
import pending from '../NewCalls/pending';
import { loginFail, loginSuccess } from '../Redux/Auth/ActionCreatore';
import BottomTabs from '../RootNavigation/BottomTabs';
import Success from '../Success/Success';
const Stack = createStackNavigator();

class RouteNavigation extends React.Component {
  state = { skip: undefined, comp: '' };

  render() {
    return (
      <>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName={this.props.login.loginSuccess ? 'Home' : 'Login'}
            screenOptions={{ headerShown: false }}>
            {/* <Stack.Screen name="Slider" component={Slider} /> */}
            {this.props.login.loginSuccess ? null : <Stack.Screen name="Login" component={Login} />}
            {this.props.login.loginSuccess ? null : <Stack.Screen name="Forgotpass" component={Forgotpass} />}
            {this.props.login.loginSuccess ? null : <Stack.Screen name="Register" component={Register} />}
            {this.props.login.loginSuccess ? <Stack.Screen name="Home" component={BottomTabs} /> : null}
            {this.props.login.loginSuccess ? <Stack.Screen name="Contactlist" component={Contactlist} /> : null}
            {this.props.login.loginSuccess ? <Stack.Screen name="completed" component={completed} /> : null}
            {this.props.login.loginSuccess ? <Stack.Screen name="pending" component={pending} /> : null}
            {this.props.login.loginSuccess ? <Stack.Screen name="Success" component={Success} /> : null}
            {this.props.login.loginSuccess ? <Stack.Screen name="expertcall" component={expertcall} /> : null}
            {/* <Stack.Screen name="BottomTabs" component={BottomTabs} /> */}
            {/* <Stack.Screen name="Home" component={Home} /> */}
          </Stack.Navigator>
        </NavigationContainer>
      </>

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
  loginFail: () => dispatch(loginFail()),
});
export default connect(mapStateToProps, mapDispatchToProps)(RouteNavigation);
