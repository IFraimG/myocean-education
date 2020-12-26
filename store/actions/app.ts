import { appTypes } from "../types"

export type editHeaderActionType = { type: typeof appTypes.EDIT_HEADER, payload: boolean }
export type setModalLgOActionType = { type: typeof appTypes.SET_MODALGO, payload: boolean }

export const editHeader = (isTrue: boolean): editHeaderActionType => ({type: appTypes.EDIT_HEADER, payload: isTrue})
export const setModalLgOAction = (isModal: boolean): setModalLgOActionType => ({type: appTypes.SET_MODALGO, payload: isModal})
