import { call, put } from 'redux-saga/effects';
import authRequests from '../api/auth';
import coursesRequests from '../api/courses';
import { 
  getCoursesSuccess, getCourseSuccess, getFinishedCoursesSuccess,
   getCurrentCourseType, getFinishedCoursesType, getCoursesType
} from './../actions/courses';


export function* getCoursesWorker(action: getCoursesType) {
  try {
    let data = yield call(coursesRequests.getCourses, action.payload)
    yield put(getCoursesSuccess(data))
  } catch (error) {
    console.log(error);
  }
}

export function* getFinishedCoursesWorker(action: getFinishedCoursesType) {
  try {
    let res = yield call(coursesRequests.getFinishedCourses, action.payload)
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