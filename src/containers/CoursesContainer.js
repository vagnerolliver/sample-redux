import React from 'react'
import { connect } from 'react-redux'
import CourseItem from '../components/Course/CourseItem'
import CoursesList from '../components/Course/CoursesList'
import { getVisibleCourses } from "../store/reducers/courses";

const mapStateToProps = state => ({
    courses: getVisibleCourses(state.courses)
})

const CoursesContainer = ({ courses }) => (
    <CoursesList title="Courses">
        {courses.map(course =>
            <CourseItem
                key={course.id}
                course={course} />
        )}
    </CoursesList>
)

export default connect(mapStateToProps)(CoursesContainer)