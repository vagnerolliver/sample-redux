import http from "../middleware/fetchApi";

export const coursesRequest = "[Courses Request] All Courses Requested";
export const coursesSuccess = "[Courses Response Success] Success";
export const coursesFailure = "[Courses Response Failure] Failure";

export const coursesAllRequest = ()=> ({
    type: coursesRequest,
})

export const coursesRequestFailure = () => ({
    type: coursesFailure,
})

export const coursesRequestSuccess = data => ({
    type: coursesSuccess,
    payload: data,
})

export const getCourses = () => dispatch => {
    dispatch(coursesAllRequest)

    http.get('courses')
       .then(response => {
           const { data: { payload } } = response;
           dispatch(coursesRequestSuccess(payload))
       })
       .catch(error => console.log('error', error))
}
