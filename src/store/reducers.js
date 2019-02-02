import { allCoursesLoaded } from "./actions";

const coursesReducers = (state = [], action) => {
    switch (action.type) {
        case allCoursesLoaded:
            return [...action.payload]
        default:
            return state
    }
}

export default coursesReducers

