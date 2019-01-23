import shop from "../../api/shop";

export const AllCoursesRequesteds = "[Courses Course Page] All Courses Requested";
export const allCoursesLoaded = "[Courses Course Page] All Courses Load";

/* export const requestCourses = ({
    type: AllCoursesRequesteds
})

export const courseLoad = courses => ({
    type: allCoursesLoaded,
    courses
})
*/

export const requestAllCourses = () => dispatch => {
    shop.getProducts(courses => {
        dispatch(coursesLoad(courses))
    })
}

const coursesLoad = courses => ({
    type: allCoursesLoaded,
    courses
})
