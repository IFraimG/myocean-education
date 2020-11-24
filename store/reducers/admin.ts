import usersRequests from "../api/users"

const GET_ALL_USERS: string = "GET_ALL_USERS"
const SET_CREATE_USER: string = "SET_CREATE_USER"
const SET_SPLICE_LOADING: string = "SET_SPLICE_LOADING"

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

type stateType = {
  fullUsers: Array<any> | null,
  spliceUsers: Array<any>
  isCreateUser: boolean,
  isSpliceUsersLoading: boolean
}
const stateDefault: stateType = {
  fullUsers: [],
  spliceUsers: [],
  isCreateUser: false,
  isSpliceUsersLoading: false
}

type allUsersActionType = {type: typeof GET_ALL_USERS, payload: {usersData: Array<any> | null, spliceData: Array<any> | null | undefined}}
type setCreateUserActionType = {type: typeof SET_CREATE_USER}
type setSpliceLoadingAT = {type: typeof SET_SPLICE_LOADING}

const AdminReducer = (state = stateDefault, action: any): stateType => {
  switch (action.type) {
    case GET_ALL_USERS: return {...state, fullUsers: action.payload.usersData, spliceUsers: action.payload.spliceData}
    case SET_CREATE_USER: return {...state, isCreateUser: !state.isCreateUser}
    case SET_SPLICE_LOADING: return {...state, isSpliceUsersLoading: !state.isSpliceUsersLoading}
    default: return {...state}
  }
}

export const getAllUsersAction = (usersData: Array<any> | null, spliceData: Array<any> | null | undefined): allUsersActionType => ({ type: GET_ALL_USERS, payload: {usersData, spliceData}})
export const setCreateUserAction = (): setCreateUserActionType => ({type: SET_CREATE_USER})
export const setSpliceLoadingAction = (): setSpliceLoadingAT => ({type: SET_SPLICE_LOADING})

export const userCreateThunk = (userData: userFirstDataValues) => async (dispatch: any) => {  
  let res = await usersRequests.createUser(userData)
  if (res.status === 201) setCreateUserAction()
}
export const getCurrentUserThunk = (id: string) => async (dispatch: any) => {
  let data = await usersRequests.getCurrentUser(id)
  console.log(data);
}
export const dropUsersThunk = (usersID: Array<string>) => async (dispatch: any) => {
  let data = await usersRequests.dropUser(usersID)

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

export default AdminReducer