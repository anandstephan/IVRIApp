import React, { Component } from 'react';
import Splashscreen from './src/SplashScreen/Splash';
import { Text } from 'react-native';
import RouteNavigation from './src/RootNavigation/Root';
import { ConfigureStore } from './src/Redux/Store';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
const { persistor, store } = ConfigureStore();
 
 
export default class App extends React.Component {
  constructor(props) {
    super(props);
    if (Text.defaultProps == null) Text.defaultProps = {};
    Text.defaultProps.allowFontScaling = false;
    this.state = { showApp: false };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ showApp: true });
    }, 2500);
  }
  render() {
    return (
      <>
        {this.state.showApp ? ( 
     <Provider store={store}>
     <PersistGate loading={null} persistor={persistor}>
            <RouteNavigation />
            </PersistGate>
        </Provider>
        ) : (
            <Splashscreen />
          )}
      </>
    );
  }
}
