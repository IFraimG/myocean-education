import { userFirstDataValues } from '../interfaces/admin';
import { adminTypes } from "../types"

// middleware
export type getAllUsersType = {type: typeof adminTypes.GET_ALL_USERS}
export type setCreateUserActionType = {type: typeof adminTypes.SET_CREATE_USER, payload: userFirstDataValues}
export type getCurrentUserType = {type: typeof adminTypes.GET_CURRENT_USER, payload: string}
export type getUserNameType = {type: typeof adminTypes.GET_CURRENT_USER_NAME, payload: any}
export type deleteUserType = {type: typeof adminTypes.DELETE_USER, payload: Array<string>}
export type addUserCourseType = {type: typeof adminTypes.ADD_USER_COURSE, payload: any}
export type getAllCoursesType = {type: typeof adminTypes.GET_ALL_COURSES}
export type deleteCoursesType = {type: typeof adminTypes.DELETE_COURSES, payload: any}

export const getAllUsersAction = (): getAllUsersType => ({ type: adminTypes.GET_ALL_USERS })
export const setCreateUserAction = (usersData: userFirstDataValues): setCreateUserActionType => ({type: adminTypes.SET_CREATE_USER, payload: usersData})
export const getCurrentUserAction = (userID: string): getCurrentUserType => ({ type: adminTypes.GET_CURRENT_USER, payload: userID })
export const getUserDataName = (firstname: string, lastname: string): getUserNameType => ({ type: adminTypes.GET_CURRENT_USER_NAME, payload: {firstname: firstname, lastname: lastname} })
export const deleteUserAction = (usersID: Array<string>): deleteUserType => ({type: adminTypes.DELETE_USER, payload: usersID})
export const addUserCourse = (userID: string, courseID: string): addUserCourseType => ({type: adminTypes.ADD_USER_COURSE, payload: {userID, courseID}})
export const getAllCoursesAction = (): getAllCoursesType => ({type: adminTypes.GET_ALL_COURSES})
export const deleteCoursesAction = (coursesData: any): deleteCoursesType => ({type: adminTypes.DELETE_COURSES, payload: coursesData})

// success
export type createUserSuccessType = {type: typeof adminTypes.SET_CREATE_USER_SUCCESS}
export type getAllUsersSuccessType = {type: typeof adminTypes.GET_ALL_USERS_SUCCESS, payload: {usersData: Array<any> | null, spliceData: Array<any> | null | undefined}}
export type setUserDataSuccessType = {type: typeof adminTypes.GET_CURRENT_USER_SUCCESS, payload: any}
export type setSpliceLoadingAT = {type: typeof adminTypes.SET_SPLICE_LOADING}
export type setErrorType = {type: typeof adminTypes.SET_ERROR, payload: string}
export type clearErrorType = {type: typeof adminTypes.CLEAR_ERROR}
export type getAllCoursesSuccessType = {type: typeof adminTypes.GET_ALL_COURSES_SUCCESS, payload: Array<any>}

export const createUserSuccess = (): createUserSuccessType => ({type: adminTypes.SET_CREATE_USER_SUCCESS})
export const getAllUsersSuccess = (usersData: Array<any> | null, spliceData: Array<any> | null | undefined): getAllUsersSuccessType => ({ type: adminTypes.GET_ALL_USERS_SUCCESS, payload: {usersData, spliceData}})
export const setUserDataSuccess = (data: any): setUserDataSuccessType => ({type: adminTypes.GET_CURRENT_USER_SUCCESS, payload: data})
export const setSpliceLoadingAction = (): setSpliceLoadingAT => ({type: adminTypes.SET_SPLICE_LOADING})
export const setErrorAction = (err: string): setErrorType => ({type: adminTypes.SET_ERROR, payload: err})
export const clearErrorAction = (): clearErrorType => ({type: adminTypes.CLEAR_ERROR})
export const getAllCoursesSuccess = (coursesData: Array<any>): getAllCoursesSuccessType => ({type: adminTypes.GET_ALL_COURSES_SUCCESS, payload: coursesData})