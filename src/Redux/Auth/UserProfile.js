import * as ActionTypes from './ActionTypes';

export const User = (
  state = {
    data:null,
    isLoading: false,
    errMess: null,
  },
  action,
) => {
  switch (action.type) {
    case ActionTypes.USERDATA_ERR:
      return {
        ...state,
        data:null,
        isLoading: false,
        errMess: action.payload,
      };

    case ActionTypes.USERDATA_SUCCESS:
      return {
        ...state,
        data:action.payload,
        isLoading: false,
        errMess: null,
      };

    case ActionTypes.USER_ORDERS_LOADING:
      return {
        ...state,
       data:state.data,
        isLoading: true,
        errMess: null,
      };

    case ActionTypes.LOG_OUT:
      return {
        ...state,
       data:null,
        isLoading: false,
        errMess: null,
      };

    default:
      return state;
  }
};
