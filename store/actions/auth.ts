import { userLogin, userRegistation } from '../interfaces/auth';
import { authTypes } from "../types"

// middleware
export type setAuthActionType = { type: typeof authTypes.SET_AUTH, payload: userLogin }
export const setAuthAction = (usersData: userLogin): setAuthActionType => ({type: authTypes.SET_AUTH, payload: usersData})

export type logoutActionType = { type: typeof authTypes.USER_LOGOUT }
export const logoutAction = (): logoutActionType => ({type: authTypes.USER_LOGOUT})

export type checkAuthActionType = { type: typeof authTypes.CHECK_AUTH }
export const checkAuthAction = (): checkAuthActionType => ({type: authTypes.CHECK_AUTH})

export type registationUserType = { type: typeof authTypes.REGISTATION_USER, payload: userRegistation }
export const registationUser = (userData: userRegistation) => ({ type: authTypes.REGISTATION_USER, payload: userData })

// success
export type setAuthTypeSuccess = {type: authTypes.SET_AUTH_SUCCESS, payload: boolean}
export const setAuthActionSuccess = (isAuth: boolean): setAuthTypeSuccess => ({type: authTypes.SET_AUTH_SUCCESS, payload: isAuth})

export type setAuthErrorType = {type: authTypes.SET_ERROR, payload: string | null}
export const setAuthError = (err: string | null): setAuthErrorType => ({type: authTypes.SET_ERROR, payload: err})