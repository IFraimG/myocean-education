import { HYDRATE } from 'next-redux-wrapper';
import authRequests from "../api/auth";
import { authTypes } from "../types"

type setAuthActionType = { type: typeof authTypes.SET_AUTH, payload: boolean }

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
    case HYDRATE: return { ...state, ...action.payload }
    case authTypes.SET_AUTH: {
      console.log(action.payload);
      
      return { ...state, isAuth: action.payload }
    }
    default: return { ...state };
  }
};

export const setAuthAction = (isAuth: boolean): setAuthActionType => ({type: authTypes.SET_AUTH, payload: isAuth})

export const loginUserThunk = (usersData: userLogin) => async (dispatch: any) => {
  let res = await authRequests.login(usersData)
  if (res.status === 200) {
    document.cookie = `jwt=${res.data.jwt}`
    dispatch(setAuthAction(true))
  }
}

export const checkAuth = () => async (dispatch: any): Promise<boolean> => {
  let res: any = await authRequests.checkAuth()
  dispatch(setAuthAction(res))
  console.log(res);
  
  return res
}

export const logout = () => async (dispatch: any) => {
  let cookies = document.cookie.split(";");
  
  for (let i = 0; i < cookies.length; i++) {
    let name = cookies[i].indexOf("=") > -1 ? cookies[i].substr(0, cookies[i].indexOf("=")) : cookies[i];
    document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
  }
  dispatch(setAuthAction(false))
}

export default AuthReducer;