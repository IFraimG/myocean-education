import authRequests from "../api/auth";

const SET_AUTH: string = "myocean/auth/SET_AUTH"

type setAuthActionType = { type: typeof SET_AUTH, payload: boolean }


export type userLogin = {
  email: string
  password: string
  remember: boolean
}

type stateType = {
  isAuth: boolean;
};
const stateDefault: stateType = {
  isAuth: false,
};

const AuthReducer = (state = stateDefault, action: any): stateType => {
  switch (action.type) {
    case SET_AUTH: return { ...state, isAuth: action.payload }
    default: return { ...state };
  }
};

export const setAuthAction = (isAuth: boolean): setAuthActionType => ({type: SET_AUTH, payload: isAuth})

export const loginUserThunk = (usersData: userLogin) => async (dispatch: any) => {
  let res = await authRequests.login(usersData)
  if (res.status === 200) {
    document.cookie = `jwt=${res.data.jwt}`
    dispatch(setAuthAction(true))
  }
}

export const checkAuth = () => async (dispatch: any) => {
  let res: any = await authRequests.checkAuth()
  dispatch(setAuthAction(res))
}

export default AuthReducer;