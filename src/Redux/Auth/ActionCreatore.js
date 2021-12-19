import Axios from 'axios';
import { ToastAndroid } from 'react-native';
import * as ActionTypes from './ActionTypes';

function toast(message) {
  // Alert.alert(message);
  ToastAndroid.showWithGravity(
    message,
    ToastAndroid.SHORT,
    ToastAndroid.CENTER,
  );
}

export const loginSuccess = (obj) => (dispatch) => dispatch(addUser(obj));
export const addProfile = (obj) => (dispatch) => dispatch(addProfileData(obj));
export const addProfileData = (userData) => ({
  type: ActionTypes.USERDATA_SUCCESS,
  payload: userData,
});
export const reLogin = (screenName) => dispatch => dispatch(reLoginUser(screenName));
const reLoginUser = (screenName) => ({
  type: ActionTypes.RE_LOGIN,
  payload: screenName,
})

export const addUser = (userData) => ({
  type: ActionTypes.LOGIN_SUCCESS,
  payload: userData,
});

export const loginFail = (errMessage) => (dispatch) => {
  dispatch(errInLogin(errMessage));
};

export const errInLogin = (errMessage) => ({
  type: ActionTypes.LOGIN_ERR,
  payload: errMessage,
});

export const logOut = () => (dispatch) => dispatch(logOutuser());

logOutuser = () => ({
  type: ActionTypes.LOG_OUT,
});

export const skipLogin = () => (dispatch) => {
  dispatch(loginSkipped());
};

export const loginSkipped = () => ({
  type: ActionTypes.SKIPPED_LOGIN,
});

//the below action sets a value hasSelectedAddress In login reducer to true which means that user has selected ana ddress
export const addressSelected = () => (dispatch) => {
  dispatch(userSelectedDeliveryAddress());
};

export const userSelectedDeliveryAddress = () => ({
  type: ActionTypes.ADDRESS_SELECTED,
});

export const getuserAddresses = (data) => (dispatch) => {
  var userId = data.userId;
  var currentSelectedAddress = data.currentSelectedAddress;
  // console.log(
  //   'Current selected address of user on action creator screen==============',
  //   currentSelectedAddress,
  // );
  var url = '';

  Axios.get(url, {
    headers: {
      Authorization: 'bearer ' + '',
      'Content-type': 'application/json',
    },
    timeout: 15000,
  })
    .then((response) => {
      // console.log(
      //   'Addresses data->',
      //   response.data.object,
      //   'currentSelectedAddress===========================================',
      //   currentSelectedAddress,
      // );
      dispatch(addAddresses(response.data.object, currentSelectedAddress));
      if (response.data.object.length === 0) {
        dispatch(removeSelectedAddressAndNearestSupplier());
      }
    })
    .catch((error) => {
      dispatch(addressesFailed(error.message));
      console.log('Error', error.message);
    });
};

export const addAddresses = (addresses, currentSelectedAddress) => ({
  type: ActionTypes.GET_USER_ADDRESSES,
  payload: {
    addresses: addresses,
    currentSelectedAddress: currentSelectedAddress,
  },
});

export const addressesLoading = () => ({
  type: ActionTypes.USER_ADDRESSES_LOADING,
});

export const addressesFailed = (error) => ({
  type: ActionTypes.USER_ADDRESSES_FAILED,
  payload: error,
});

//the below reducre is used to set a address selected by the user as the address selected by the user for delivery in addresses reducer
export const addSelectedAddress = (address) => (dispatch) => {
  dispatch(selectedAddress(address));
};

export const selectedAddress = (address) => ({
  type: ActionTypes.ADD_SELECTED_ADDRESS,
  payload: address,
});

export const getUserData = (customerId) => (dispatch) => {
  // dispatch(userDataLoading());

  const url = '';
  console.log('get user data url', url)
  Axios.get(url, {
    headers: {
      Authorization: 'bearer ' + '',
      'Content-type': 'application/json',
    },
    timeout: 15000,
  })
    .then((response) => {
      console.log('User data from action creatore screen', JSON.stringify(response.data.object[0]));
      dispatch(addUserData(response.data.object[0]));
    })
    .catch((err) => {
      dispatch(userDataErr(err.message));
      console.log('Err in loding user profile', err.message);
      // toast('Error while loading profile');
    });
};

export const userDataLoading = () => ({
  type: ActionTypes.USERDATA_LOADING,
});

export const addUserData = (data) => ({
  type: ActionTypes.USERDATA_SUCCESS,
  payload: data,
});

export const userDataErr = (err) => ({
  type: ActionTypes.USERDATA_ERR,
  payload: err,
});

