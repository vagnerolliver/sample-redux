import { coursesFailure, coursesRequest, coursesSuccess } from "./actions";

const coursesReducers = (state = [], action) => {
    switch (action.type) {
        case coursesRequest:
            return  state
        case coursesSuccess:
            return [...action.payload]
        case coursesFailure:
            return Object.assign({}, state, {
                ...action.payload,
                isLoading: false,
            })

        default:
            return state
    }
}

export default coursesReducers

