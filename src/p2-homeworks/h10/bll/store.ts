import {loadingReducer} from './loadingReducer'
import {combineReducers, createStore} from "redux";

export const reducers = combineReducers({
loading: loadingReducer,

})
export type AppStoreType = ReturnType<typeof reducers>

export const store = createStore(reducers)

export default store



// @ts-ignore
window.store = store // for dev
