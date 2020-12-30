import { call, put } from 'redux-saga/effects';
import coursesRequests from '../api/courses';
import { 
  getCoursesType, getCoursesSuccess, getCourseSuccess, getCurrentCourseType,
  getFinishedCoursesType, getFinishedCoursesSuccess
} from './../actions/courses';


export function* getCoursesWorker(action: getCoursesType) {
  try {
    let res = yield call(coursesRequests.getCourses, action.payload)
    yield put(getCoursesSuccess(res))
  } catch (error) {
    console.log(error);
  }
}

export function* getFinishedCoursesWorker(action: getFinishedCoursesType) {
  try {
    let res = yield call(coursesRequests.getCurrentCourse, action.payload)
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