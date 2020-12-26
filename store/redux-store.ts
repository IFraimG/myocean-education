import { createStore, combineReducers, applyMiddleware, compose } from "redux"
import { MakeStore, createWrapper, Context } from "next-redux-wrapper"
import thunkMiddleware from "redux-thunk"
import logger from "redux-logger"
// import { configureStore } from "@reduxjs/toolkit"
import appReducer, {stateAppType} from "./reducers/app"
import profileReducer, {stateProfileType} from "./reducers/profile"
import adminReducer, {stateAdminType} from "./reducers/admin"
import authReducer , {stateAuthType} from "./reducers/auth"

// @ts-ignore
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

let reducers = combineReducers({
  app: appReducer, profile: profileReducer, admin: adminReducer, auth: authReducer
})

export type AppType = ReturnType<typeof reducers>
export type StateType = stateAdminType | stateAppType | stateAuthType | stateProfileType

let store: MakeStore<AppType> = (context: Context) => createStore(reducers, composeEnhancers(applyMiddleware(logger, thunkMiddleware)))

export const wrapperStore = createWrapper<AppType>(store, {debug: true})