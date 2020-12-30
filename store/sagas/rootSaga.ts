import { appTypes, profileTypes, authTypes, adminTypes, coursesTypes } from './../types';
import { takeEvery, all } from "redux-saga/effects"
import { AppWorkerHeader, AppWorkerModal } from './appSaga';
import { loginWorker, checkAuthWorker, logout } from './authSaga';
import { CurrentLessonsWorker, getTasksWorker } from './profileSaga';
import { getAllUsers, createUser, getCurrentUserWorker, getUserNameWorker, deleteUser } from './adminSaga';
import { getCoursesWorker, getFinishedCoursesWorker, getCurrentCourse } from "./coursesSaga"

function* ProfileWatcher() {
  yield takeEvery(profileTypes.GET_TASKS, getTasksWorker)
  yield takeEvery(profileTypes.GET_CURRENT_LESSONS, CurrentLessonsWorker)
}

function* AppWatcher() {
  yield takeEvery(appTypes.EDIT_HEADER, AppWorkerHeader)
  yield takeEvery(appTypes.SET_MODALGO, AppWorkerModal)
    
}

function* AuthWatcher() {
  yield takeEvery(authTypes.SET_AUTH, loginWorker)
  yield takeEvery(authTypes.USER_LOGOUT, logout)
  yield takeEvery(authTypes.CHECK_AUTH, checkAuthWorker)
}

function* AdminWatcher() {
  yield takeEvery(adminTypes.GET_ALL_USERS, getAllUsers)
  yield takeEvery(adminTypes.SET_CREATE_USER, createUser)
  yield takeEvery(adminTypes.GET_CURRENT_USER, getCurrentUserWorker)
  yield takeEvery(adminTypes.GET_CURRENT_USER_NAME, getUserNameWorker)
  yield takeEvery(adminTypes.DELETE_USER, deleteUser)
}

function* CoursesWatcher() {
  yield takeEvery(coursesTypes.GET_COURSES, getCoursesWorker)
  yield takeEvery(coursesTypes.GET_FINISHED_COURSES, getFinishedCoursesWorker)
  yield takeEvery(coursesTypes.GET_CURRENT_COURSE, getCurrentCourse)
  
}

function* mainWatcher() {
  yield all([ AppWatcher(), ProfileWatcher(), AuthWatcher(), AdminWatcher(), CoursesWatcher() ])
}

export default mainWatcher