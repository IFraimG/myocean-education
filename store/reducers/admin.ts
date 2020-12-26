import { setCreateUserAction, getAllUsersAction, setSpliceLoadingAction, setUserDataAction } from '../actions/admin';
import { HYDRATE } from "next-redux-wrapper"
import usersRequests from "../api/users"
import { adminTypes } from "../types"

export interface sliceUser {
  firstName: string,
  lastName: string,
  id: string,
  email: string,
  key: number
}
export interface userFirstDataValues {
  firstname: string,
  lastname: string, 
  email: string,
  password: string
}

export interface stateAdminType {
  fullUsers: Array<any> | null,
  spliceUsers: Array<any>
  isCreateUser: boolean,
  isSpliceUsersLoading: boolean,
  userFullData: any
}
const stateDefault: stateAdminType = {
  fullUsers: [],
  spliceUsers: [],
  isCreateUser: false,
  isSpliceUsersLoading: false,
  userFullData: null
}

const AdminReducer = (state = stateDefault, action: any): stateAdminType => {
  switch (action.type) {
    case HYDRATE: return { ...state, ...action.payload }
    case adminTypes.GET_ALL_USERS: return {...state, fullUsers: action.payload.usersData, spliceUsers: action.payload.spliceData}
    case adminTypes.SET_CREATE_USER: return {...state, isCreateUser: !state.isCreateUser}
    case adminTypes.SET_SPLICE_LOADING: return {...state, isSpliceUsersLoading: !state.isSpliceUsersLoading}
    case adminTypes.GET_CURRENT_USER: return { ...state, userFullData: action.payload }
    default: return {...state}
  }
}

export const userCreateThunk = (userData: userFirstDataValues) => async (dispatch: any) => {  
  let res = await usersRequests.createUser(userData)
  if (res.status === 201) setCreateUserAction()
}
export const getCurrentUserThunk = (id: string) => async (dispatch: any) => {
  let data = await usersRequests.getCurrentUser(id)
  console.log(data);
  dispatch(setUserDataAction(data))
}
export const getAllUsersThunk = () => async (dispatch: any) => {
  let data = await usersRequests.getAllUsers()
  let spliceData: Array<any> = []
  data.map((item: any, index: number) => spliceData.push({ 
    key: index, firstName: item.firstName, lastName: item.lastName, email: item.email, id: item.id
  }))
  dispatch(getAllUsersAction(data, spliceData))
  dispatch(setSpliceLoadingAction())
}
export const dropUsersThunk = (usersID: Array<string>) => async (dispatch: any) => {
  await usersRequests.dropUser(usersID)
}

export default AdminReducer