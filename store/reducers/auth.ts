import { HYDRATE } from 'next-redux-wrapper';
import { authTypes } from "../types"

export type userLogin = {
  email: string
  password: string
  remember: boolean
}

export interface stateAuthType {
  isAuth: boolean;
};
const stateDefault: stateAuthType = {
  isAuth: false,
};

const AuthReducer = (state = stateDefault, action: any): stateAuthType => {
  switch (action.type) {
    case HYDRATE: return { ...state, ...action.payload.auth }
    case authTypes.SET_AUTH_SUCCESS: {
      console.log(action.payload);
      
      return { ...state, isAuth: action.payload }
    }
    default: return { ...state };
  }
};



export default AuthReducer;