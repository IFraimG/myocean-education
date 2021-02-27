import { stateAdminType } from '../interfaces/admin';
import { HYDRATE } from "next-redux-wrapper"
import { adminTypes } from "../types"

const stateDefault: stateAdminType = {
  fullUsers: [],
  spliceUsers: [],
  isCreateUser: false,
  isSpliceUsersLoading: false,
  userFullData: null,
  errors: [],
  allCourses: []
}

const AdminReducer = (state = stateDefault, action: any): stateAdminType => {
  switch (action.type) {
    case HYDRATE: return { ...state, ...action.payload.admin }
    case adminTypes.GET_ALL_USERS_SUCCESS: {
      return {...state, fullUsers: action.payload.usersData, spliceUsers: action.payload.spliceData}
    }
    case adminTypes.SET_CREATE_USER_SUCCESS: return {...state, isCreateUser: !state.isCreateUser}
    case adminTypes.SET_SPLICE_LOADING: return {...state, isSpliceUsersLoading: !state.isSpliceUsersLoading}
    case adminTypes.GET_CURRENT_USER_SUCCESS: return { ...state, userFullData: action.payload }
    case adminTypes.GET_ALL_COURSES_SUCCESS: return { ...state, allCourses: action.payload }
    case adminTypes.SET_ERROR: return { ...state, errors: [...action.payload], userFullData: null }
    default: return {...state}
  }
}

export default AdminReducer