import { setAuthActionSuccess } from './../actions/auth';
import { put, call } from "redux-saga/effects";
import authRequests from "../api/auth";

export function* loginWorker(action: any) {
  let res = yield call(authRequests.login, action.payload)
  if (res.status === 200) {
    document.cookie = `jwt=${res.data.jwt}`
    yield put(setAuthActionSuccess(true))
  }
}

export function* checkAuthWorker() {
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