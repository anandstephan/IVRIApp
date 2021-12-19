// import storage from 'redux-persist/lib/storage';
import AsyncStorage from '@react-native-community/async-storage';
import { applyMiddleware, createStore } from 'redux';
import { persistCombineReducers, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import { Addresses } from './Auth/Addresses';
import { Login } from './Auth/Login';
import { User } from './Auth/UserProfile';

export const ConfigureStore = () => {
  const config = {
    key: 'root',
    storage: AsyncStorage,
    debug: true,
  };
  const store = createStore(
    persistCombineReducers(config, {
      login: Login,
      addresses: Addresses,
      user: User,
    }),
    applyMiddleware(thunk),
  );

  const persistor = persistStore(store);

  return { persistor, store };
};
