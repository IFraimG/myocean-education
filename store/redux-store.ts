import { createStore, combineReducers, applyMiddleware, compose } from "redux"
import { MakeStore, createWrapper, Context } from "next-redux-wrapper"
import createSagaMiddleware from "redux-saga"
import { composeWithDevTools } from 'redux-devtools-extension';
// import logger from "redux-logger"
// import { configureStore } from "@reduxjs/toolkit"
// import thunkMiddleware from "redux-thunk"
import mainSaga from "./sagas/rootSaga"
import appReducer, {stateAppType} from "./reducers/app"
import profileReducer, {stateProfileType} from "./reducers/profile"
import adminReducer, {stateAdminType} from "./reducers/admin"
import authReducer , {stateAuthType} from "./reducers/auth"

// @ts-ignore
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

let reducers = combineReducers({app: appReducer, profile: profileReducer, admin: adminReducer, auth: authReducer})

export type AppType = ReturnType<typeof reducers>
export type StateType = stateAdminType | stateAppType | stateAuthType | stateProfileType

const createMyStore = () => {
  const sagaMiddleware = createSagaMiddleware()
  let store = createStore(reducers, composeEnhancers(applyMiddleware(sagaMiddleware)))
  store.sagaTask = sagaMiddleware.run(mainSaga)

  return store
}
// let store: MakeStore<AppType> = (context: Context) => createStore(reducers, composeWithDevTools(applyMiddleware(sagaMiddleware)))

let wrapperStore = createWrapper<AppType>(createMyStore, {debug: true})

export default wrapperStore