import { appTypes, profileTypes } from './../types';
import { put, call, takeEvery, all } from "redux-saga/effects"
import { AppWorkerHeader, AppWorkerModal } from './appSaga';
import { CurrentLessonsWorker, getTasksWorker } from './profileSaga';


function* ProfileWatcher() {
  yield takeEvery(profileTypes.GET_TASKS, getTasksWorker)
  yield takeEvery(profileTypes.GET_CURRENT_LESSONS, CurrentLessonsWorker)
}

function* AppWatcher() {
  yield takeEvery(appTypes.EDIT_HEADER, AppWorkerHeader)
  yield takeEvery(appTypes.SET_MODALGO, AppWorkerModal)
    
}

function* AuthWatcher() {
  yield console.log("hellllllo");
}

function* mainWatcher() {
  yield all([ AppWatcher(), ProfileWatcher() ])
}

export default mainWatcher