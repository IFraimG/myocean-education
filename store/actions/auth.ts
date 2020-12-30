import { userLogin } from './../reducers/auth';
import { authTypes } from "../types"

// middleware
export type setAuthActionType = { type: typeof authTypes.SET_AUTH, payload: userLogin }
export const setAuthAction = (usersData: userLogin): setAuthActionType => ({type: authTypes.SET_AUTH, payload: usersData})

export type logoutActionType = { type: typeof authTypes.USER_LOGOUT }
export const logoutAction = (): logoutActionType => ({type: authTypes.USER_LOGOUT})

export type checkAuthActionType = { type: typeof authTypes.CHECK_AUTH }
export const checkAuthAction = (): checkAuthActionType => ({type: authTypes.CHECK_AUTH})

// success
export type setAuthTypeSuccess = {type: authTypes.SET_AUTH_SUCCESS, payload: boolean}
export const setAuthActionSuccess = (isAuth: boolean): setAuthTypeSuccess => ({type: authTypes.SET_AUTH_SUCCESS, payload: isAuth})