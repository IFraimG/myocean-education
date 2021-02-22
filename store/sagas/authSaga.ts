import { setAuthActionSuccess, setAuthError, setAuthActionType, registationUserType } from './../actions/auth';
import { put, call } from "redux-saga/effects";
import authRequests from "../api/auth";

export function* loginWorker(action: setAuthActionType) {
  try {
    let res = yield call(authRequests.login, action.payload)
    if (res.status === 201) {
      document.cookie = `jwt=${res.data.token}`
      yield put(setAuthActionSuccess(true))
      yield put(setAuthError(null))
    }
  } catch (error) {
    yield put(setAuthError(error.message))
  }
}

export function* checkAuthWorker() {
  console.log("tgrfed");
  
  let res: any = yield call(authRequests.checkAuth)
  yield put(setAuthActionSuccess(res))
  
  return res
}

export function* logout() {
  let cookies = document.cookie.split(";");
  
  for (let i = 0; i < cookies.length; i++) {
    let name = cookies[i].indexOf("=") > -1 ? cookies[i].substr(0, cookies[i].indexOf("=")) : cookies[i];
    document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
  }

  yield put(setAuthActionSuccess(false))
}

export function* registration(action: registationUserType) {
  try {
    console.log(action);
    
    let res = yield call(authRequests.registration, action.payload)
    document.cookie = `jwt=${res.data.token}`

    yield put(setAuthError(null))
    yield put(setAuthActionSuccess(true))
  } catch (error) {
    yield put(setAuthError(error.message))
  }
}