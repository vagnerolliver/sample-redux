import shop from "../../api/shop";
import http from "../../middleware/fetchApi";


export const AllCoursesRequesteds = "[Courses Course Page] All Courses Requested";
export const allCoursesLoaded = "[Courses Course Page] All Courses Load";

const coursesLoad = courses => ({
    type: allCoursesLoaded,
    courses
})

export const requestAllCourses = () => dispatch => {
     shop.getCourses(courses => {
         dispatch(coursesLoad(courses))
     })
    //http.get('courses')
    //  .then(response => dispatch(coursesLoad(response)))
    //  .catch(error => console.log('error', error))
}
