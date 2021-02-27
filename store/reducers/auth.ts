import { HYDRATE } from 'next-redux-wrapper';
import { authTypes } from "../types"
import { stateAuthType } from '../interfaces/auth';

const stateDefault: stateAuthType = {
  isAuth: false,
  error: null
};

const AuthReducer = (state = stateDefault, action: any): stateAuthType => {
  switch (action.type) {
    case HYDRATE: return { ...state, ...action.payload.auth }
    case authTypes.SET_AUTH_SUCCESS: {     
      return { ...state, isAuth: action.payload }
    }
    case authTypes.SET_ERROR: {
      return { ...state, error: action.payload }
    }
    default: return { ...state };
  }
};



export default AuthReducer;