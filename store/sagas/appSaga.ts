import { setModalLgOActionSuccess, editHeaderSuccess, editHeaderActionType, setModalLgOActionType} from '../actions/app';
import { put } from "redux-saga/effects"

export function* AppWorkerModal(action: setModalLgOActionType) {
  console.log(action.payload);
  yield put(setModalLgOActionSuccess(action.payload))
}
  
export function* AppWorkerHeader(action: editHeaderActionType) {
  console.log(action.payload);
  yield put(editHeaderSuccess(action.payload))
}
