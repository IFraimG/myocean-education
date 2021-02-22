import { HYDRATE } from 'next-redux-wrapper';
import { authTypes } from "../types"

export type userLogin = {
  email: string
  password: string
  remember: boolean
}
export interface userRegistation {
  firstname: string
  lastname: string
  email: string
  password: string
}


export interface stateAuthType {
  isAuth: boolean
  error: string | null
};
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