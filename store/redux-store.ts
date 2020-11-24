import { createStore, combineReducers, applyMiddleware, compose } from "redux"
import thunkMiddleware from "redux-thunk"
// import { configureStore } from "@reduxjs/toolkit"
import appReducer from "./reducers/app"
import profileReducer from "./reducers/profile"
import adminReducer from "./reducers/admin"

// @ts-ignore
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

let reducers = combineReducers({
  app: appReducer, profile: profileReducer, admin: adminReducer
})

export type AppType = ReturnType<typeof reducers>

let store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)))

export default store