import { setModalLgOActionSuccess, editHeaderSuccess, editHeaderActionType, setModalLgOActionType} from '../actions/app';
import { put } from "redux-saga/effects"

export function* AppWorkerModal(action: setModalLgOActionType) {
  yield put(setModalLgOActionSuccess(action.payload))
}
  
export function* AppWorkerHeader(action: editHeaderActionType) {
  yield put(editHeaderSuccess(action.payload))
}
