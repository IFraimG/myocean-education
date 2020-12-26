import { adminTypes } from "../types"

type allUsersActionType = {type: typeof adminTypes.GET_ALL_USERS, payload: {usersData: Array<any> | null, spliceData: Array<any> | null | undefined}}
type setCreateUserActionType = {type: typeof adminTypes.SET_CREATE_USER}
type setSpliceLoadingAT = {type: typeof adminTypes.SET_SPLICE_LOADING}
type setUserData = {type: typeof adminTypes.GET_CURRENT_USER, payload: any}

export const getAllUsersAction = (usersData: Array<any> | null, spliceData: Array<any> | null | undefined): allUsersActionType => ({ type: adminTypes.GET_ALL_USERS, payload: {usersData, spliceData}})
export const setCreateUserAction = (): setCreateUserActionType => ({type: adminTypes.SET_CREATE_USER})
export const setSpliceLoadingAction = (): setSpliceLoadingAT => ({type: adminTypes.SET_SPLICE_LOADING})
export const setUserDataAction = (data: any): setUserData => ({type: adminTypes.GET_CURRENT_USER, payload: data})
