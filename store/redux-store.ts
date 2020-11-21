import { createStore, combineReducers, applyMiddleware, compose } from "redux"
import thunkMiddleware from "redux-thunk"
// import { configureStore } from "@reduxjs/toolkit"
import appReducer from "./reducers/app"
import profileReducer from "./reducers/profile"

// const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let reducers = combineReducers({
  app: appReducer, profile: profileReducer
})

export type AppType = ReturnType<typeof reducers>

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

export default store