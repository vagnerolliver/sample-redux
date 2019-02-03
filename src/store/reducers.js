import { coursesFailure, coursesRequest, coursesSuccess } from "./actions";

const coursesReducers = (state = [], action) => {
    switch (action.type) {
        case coursesRequest:
            return  {
                ...state,
                isLoading: false
            }
        case coursesSuccess:
            return Object.assign({}, state, {
                ...action.payload,
                isLoading: true,
            })
        case coursesFailure:
            return Object.assign({}, state, {
                error: action.payload,
                isLoading: true,
            })

        default:
            return state
    }
}

export default coursesReducers

