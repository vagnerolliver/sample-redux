import React from 'react'
import { connect } from 'react-redux'
import CourseItem from '../components/Course/CourseItem'
import CoursesList from '../components/Course/CoursesList'
import { getAllCourses } from "../store/reducers";

const mapStateToProps = state => ({
    courses: state.courses
})

const CoursesContainer = ({courses}) => (
    <CoursesList title="Courses">
        {Object.keys(courses).map(key =>
            <CourseItem
                key={courses[key].description}
                course={courses[key]}/>

        )}
    </CoursesList>
)

export default connect(mapStateToProps)(CoursesContainer)
