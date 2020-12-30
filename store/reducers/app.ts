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
    case HYDRATE: return { ...state, ...action.payload.app }
    case appTypes.EDIT_HEADER_SUCCESS: {
      return { ...state, isEditHeader: action.payload }
    }
    case appTypes.SET_MODALGO_SUCCESS: {
      return { ...state, isModalLogout: action.payload }
    }
    default: return {...state}
  }
}

export default AppReducer