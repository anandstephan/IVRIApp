import * as ActionTypes from './ActionTypes';

export const Login = (
  state = {
    loginLoading: false,
    loginErr: null,
    loginSuccess: false,
    accessToken: null,
    userId: null,
    data:null,
    userName: null,
  },
  action,
) => {
  switch (action.type) {
    case ActionTypes.LOGIN_LOADING:
      return {
        ...state,
        loginLoading: true,
        loginErr: null,
        loginSuccess: false,
        accessToken: null,
        data:null,
        userId: null,
        userName: null,
      };

    case ActionTypes.LOG_OUT:
      return {
        ...state,
        loginLoading: false,
        loginErr: null,
        loginSuccess: false,
        accessToken: null,
        data:null,
        userId: null,
        userName: null,
      };
    case ActionTypes.RE_LOGIN:
      return {
        ...state,
        loginLoading: false,
        loginErr: null,
        loginSuccess: false,
        accessToken: null,
        data:null,
        userId: null,
        userName: null,
      }

    case ActionTypes.LOGIN_ERR:
      return {
        ...state,
        loginLoading: false,
        loginErr: action.payload,
        loginSuccess: false,
        data:null,
        accessToken: null,
        userId: null,
        userName: null,
      };

    case ActionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        loginLoading: false,
        loginErr: null,
        loginSuccess: true,
        data:action.payload.data,
        accessToken: action.payload.accessToken,
        userId: action.payload.userId,
        userName: action.payload.fullName,
      };

    case ActionTypes.SKIPPED_LOGIN:
      return {
        ...state,
        loginLoading: false,
        loginErr: null,
        loginSuccess: false,
        data:null,
        accessToken: null,
        userId: null,
        userName: null,

      };

    case ActionTypes.ADDRESS_SELECTED:
      return {
        ...state,
        loginLoading: false,
        loginErr: null,
        loginSuccess: true,
        data:state.data,
        accessToken: state.accessToken,
        userId: state.userId,
        userName: state.userName,
      };

    default:
      return state;
  }
};
