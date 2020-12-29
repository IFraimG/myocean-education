import { HYDRATE } from 'next-redux-wrapper';
import { appTypes } from "../types"

export interface stateAppType {
  isEditHeader: boolean,
  isModalLogout: boolean
}

const defaultState: stateAppType = {
  isEditHeader: false,
  isModalLogout: false
}

function AppReducer(state = defaultState, action: any): stateAppType {
  switch (action.type) {
    case HYDRATE: return { ...state, ...action.payload }
    case appTypes.EDIT_HEADER_SUCCESS: {
      return { ...state, isEditHeader: action.payload }
    }
    case appTypes.SET_MODALGO_SUCCESS: {
      return { ...state, isModalLogout: action.payload }
    }
    default: return {...state}
  }
}

// export const thunkEditHeader = (isTrue: boolean) => (dispatch: any) => dispatch(editHeader(isTrue))
// export const setModalLogout = (isModal: boolean) => (dispatch: any) => dispatch(setModalLgOAction(isModal))

export default AppReducer