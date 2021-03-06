import { getAllCoursesType, getAllCoursesSuccess, deleteCoursesType } from './../actions/admin';
import { createCourseSuccess, createCourseType } from './../actions/courses';
import { 
  setCreateUserActionType, deleteUserType, getCurrentUserType, getUserNameType, addUserCourseType,
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

export function* createCourseWorker(action: createCourseType) {  
  let res = yield call(coursesRequests.createCourse, action.payload)
  yield put(createCourseSuccess(res.data))
}

export function* addUserCourse(action: addUserCourseType) {
  try {
    let res = yield call(coursesRequests.addUserToCourse, {userID: action.payload.userID, courseID: action.payload.courseID})
    console.log(res.data);
    
    yield put(clearErrorAction())
  } catch (error) {
    yield put(setErrorAction("Такого пользователя не существует"))
  }
}

export function* getAllCourses(action: getAllCoursesType) {
  try {
    let data = yield call(coursesRequests.getAllCourses)
    yield put(getAllCoursesSuccess(data))
  } catch (error) {
    yield put(setErrorAction(error.message))
  }
}

export function* deleteCourses(action: deleteCoursesType) {
  try {
    yield call(coursesRequests.deleteCourses, action.payload)
  } catch (error) {
    yield put(setErrorAction(error.message))
  }
}