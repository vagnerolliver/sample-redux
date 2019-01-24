import { combineReducers } from "redux";
import { allCoursesLoaded } from "../actions/actions";

const courses = (state, action) => {
    switch (action.type) {
        case 'add_cart':
            return {
                ...state,
                inventory: state.inventory - 1
            }
        default:
            return state
    }
}

const byId = (state = {}, action) => {
    switch (action.type) {
        case allCoursesLoaded:
            return {
                ...state,
                ...action.courses.reduce((obj, product) => {
                    obj[product.id] = product
                    return obj
                }, {})
            }
        default:
            const { productId } = action
            if (productId) {
                return {
                    ...state,
                    [productId]: courses(state[productId], action)
                }
            }
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