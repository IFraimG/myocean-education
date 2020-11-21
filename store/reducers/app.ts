type ActionType = editHeaderActionType

const EDIT_HEADER: string = "mcedu/app/EDIT_HEADER"

type stateType = {
  isEditHeader: boolean
}

const defaultState: stateType = {
  isEditHeader: false
}

function AppReducer(state = defaultState, action: ActionType): stateType {
  switch (action.type) {
    case EDIT_HEADER: {
      return { ...state, isEditHeader: action.payload }
    }
    default: return {...state}
  }
}

type editHeaderActionType = { type: typeof EDIT_HEADER, payload: boolean }
export const editHeader = (isTrue: boolean): editHeaderActionType => ({type: EDIT_HEADER, payload: isTrue})

export const thunkEditHeader = (isTrue: boolean) => (dispatch: any) => {
  dispatch(editHeader(isTrue))
}

export default AppReducer