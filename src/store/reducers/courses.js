import { combineReducers } from "redux";
import { allCoursesLoaded } from "../actions/actions";

const byId = (state = {}, action) => {
    switch (action.type) {
        case allCoursesLoaded:
            return {
                ...state,
                ...action.courses.reduce((obj, course) => {
                    obj[course.id] = course
                    return obj
                }, {})
            }
        default:
            return state
    }
}

const visibleIds = (state = [], action) => {
    switch (action.type) {
        case allCoursesLoaded:
            return action.courses.map(course => course.id)
        default:
            return state
    }
}

export default combineReducers({
    byId,
    visibleIds
})

export const getCourse = (state, id) =>
    state.byId[id]

export const getVisibleCourses = state =>
    state.visibleIds.map(id => getCourse(state, id))