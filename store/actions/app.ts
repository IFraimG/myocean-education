import { appTypes } from "../types"

// LAST ACTIONS
export type editHeaderActionType = { type: typeof appTypes.EDIT_HEADER_SUCCESS, payload: boolean }
export type setModalLgOActionType = { type: typeof appTypes.SET_MODALGO_SUCCESS, payload: boolean }

export const editHeaderSuccess = (isTrue: boolean): editHeaderActionType => ({type: appTypes.EDIT_HEADER_SUCCESS, payload: isTrue})
export const setModalLgOActionSuccess = (isModal: boolean): setModalLgOActionType => ({type: appTypes.SET_MODALGO_SUCCESS, payload: isModal})

// MIDDLEWARE

export type editHeaderSaga = {type: typeof appTypes.EDIT_HEADER, payload: boolean}
export type setModalLgOSaga = {type: typeof appTypes.SET_MODALGO, payload: boolean}

export const editHeader = (isTrue: boolean): editHeaderSaga => ({type: appTypes.EDIT_HEADER, payload: isTrue})
export const setModalLgOAction = (isModal: boolean): setModalLgOSaga => ({type: appTypes.SET_MODALGO, payload: isModal})
