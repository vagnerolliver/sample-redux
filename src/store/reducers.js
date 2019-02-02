import { coursesRequestSuccess, coursesAllRequest, coursesRequestFailure } from "./actions";

const coursesReducers = (state = [], action) => {
    switch (action.type) {
        case coursesAllRequest:
            return {
                ...state,
                loading: true
            }
        case coursesRequestSuccess:
            return {
                ...action.payload,
                loading: false
            }
        case coursesRequestFailure:
            return {
                ...action.payload,
                loading: false
            }

        default:
            return state
    }
}

export default coursesReducers

