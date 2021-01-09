import { createCourseSuccess } from './../actions/courses';
import { 
  setCreateUserActionType, deleteUserType, getCurrentUserType, getUserNameType,
  createUserSuccess, getAllUsersSuccess, setSpliceLoadingAction, setUserDataSuccess, setErrorAction, clearErrorAction
} from '../actions/admin';
import { put, call } from "redux-saga/effects"
import usersRequests from '../api/users';
import coursesRequests from '../api/courses';

export function* getAllUsers() {
  let data = yield call(usersRequests.getAllUsers)
  let spliceData: Array<any> = []
  data.map((item: any, index: number) => spliceData.push({ 
    key: index, firstName: item.firstName, lastName: item.lastName, email: item.email, id: item.id
  }))
  yield put(getAllUsersSuccess(data, spliceData))
  yield put(setSpliceLoadingAction())
}
  
export function* createUser(action: setCreateUserActionType) {
  let res = yield call(usersRequests.createUser, action.payload)
  if (res.status === 201) yield put(createUserSuccess())
}

export function* getCurrentUserWorker(action: getCurrentUserType) {
  try {
    let data = yield call(usersRequests.getCurrentUser, action.payload)
    console.log(data);
    yield put(clearErrorAction())
    yield put(setUserDataSuccess(data))
  } catch (error) {
    if (error.message == "Request failed with status code 404!") yield put(setErrorAction("Такого пользователя не существует"))
  }
}

export function* getUserNameWorker(action: getUserNameType) {
  try {
    let data = yield call(usersRequests.getUserName, action.payload)
    console.log(data);
    
    yield put(clearErrorAction())
    yield put(setUserDataSuccess(data))
  } catch (error) {
    if (error.message == "Request failed with status code 404!") yield put(setErrorAction("Такого пользователя не существует"))
  }
}

export function* deleteUser(action: deleteUserType) {
  yield call(usersRequests.dropUser, action.payload)
}

export function* createCourseWorker(action: any) {
  console.log(action);
  
  let res = yield call(coursesRequests.createCourse, action.payload)
  yield put(createCourseSuccess(res.data))
}