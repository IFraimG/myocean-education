import { call, put } from 'redux-saga/effects';
import authRequests from '../api/auth';
import coursesRequests from '../api/courses';
import { 
  getCoursesSuccess, getCourseSuccess, getCurrentCourseType, getFinishedCoursesSuccess
} from './../actions/courses';


export function* getCoursesWorker() {
  try {
    let dataUser = yield call(authRequests.getUserId)
    let res = yield call(coursesRequests.getCourses, dataUser.id)
    yield put(getCoursesSuccess(res))
  } catch (error) {
    console.log(error);
  }
}

export function* getFinishedCoursesWorker() {
  try {
    let dataUser = yield call(authRequests.getUserId)
    let res = yield call(coursesRequests.getCurrentCourse, dataUser.id)
    yield put(getFinishedCoursesSuccess(res))
  } catch (error) {
    console.log(error);
  }
}


export function* getCurrentCourse(action: getCurrentCourseType) {
  try {
    let res = yield call(coursesRequests.getCurrentCourse, action.payload)
    yield put(getCourseSuccess(res))
  } catch (error) {
    console.log(error);
  }
}