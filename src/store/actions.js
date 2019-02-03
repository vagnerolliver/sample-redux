import http from "../middleware/fetchApi";

export const coursesRequest = "[Courses Request] All Courses Requested";
export const coursesSuccess = "[Courses Response Success] Success";
export const coursesFailure = "[Courses Response Failure] Failure";

export const coursesAllRequest = () => ({
    type: coursesRequest,
})

export const coursesResponseFailure = error => ({
    type: coursesFailure,
    payload: error,
})

export const coursesResponseSuccess = data => ({
    type: coursesSuccess,
    payload: data,
})

export const getCourses = () => {
    return dispatch => {
        dispatch(coursesAllRequest())

        http.get('courses')
           .then(response => {
               const { data: { payload } } = response;
               dispatch(coursesResponseSuccess(payload))
           })
           .catch(error => dispatch(coursesResponseFailure(error)))
    }
}
