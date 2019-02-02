import http from "../middleware/fetchApi";

export const AllCoursesRequesteds = "[Courses Course Page] All Courses Requested";
export const allCoursesLoaded = "[Courses Course Page] All Courses Load";

export const coursesLoad = testes => ({
    type: allCoursesLoaded,
    payload: testes,
})

export const requestAllCourses = () => dispatch => {
    http.get('courses')
       .then(response => {
           const { data: { payload } } = response;
           dispatch(coursesLoad(payload))
       })
       .catch(error => console.log('error', error))
}
