import React from 'react'
import { connect } from 'react-redux'
import CourseItem from '../components/Course/CourseItem'
import CoursesList from '../components/Course/CoursesList'

const mapStateToProps = state => ({
    courses: state.courses
})

const CoursesContainer = ({courses}) => (
    <CoursesList title="Courses">
        {courses.map(course =>
            <CourseItem
                key={course.description}
                course={course}/>
        )}
    </CoursesList>
)

export default connect(mapStateToProps)(CoursesContainer)
