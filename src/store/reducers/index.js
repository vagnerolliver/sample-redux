import { combineReducers } from 'redux'
import courses, * as fromCourses  from './courses'

export default combineReducers({courses})

const getCourse = (state, id) => fromCourses.getCourse(state.courses, id)
