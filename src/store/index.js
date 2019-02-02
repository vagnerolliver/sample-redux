import { combineReducers } from 'redux'
import courses from './reducers'
export default combineReducers({courses})

export * from './reducers'
export * from './actions'
