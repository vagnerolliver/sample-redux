
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import CourseItem from '../components/Course/CourseItem'
import CoursesList from '../components/Course/CoursesList'
import { getVisibleCourses } from "../store/reducers/courses";

const CoursesContainer = ({ courses }) => (
    <CoursesList title="Courses">
        {courses.map(course =>
            <CourseItem
                key={course.id}
                course={course} />
        )}
    </CoursesList>
)

CoursesContainer.propTypes = {
    courses: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        inventory: PropTypes.number.isRequired
    })).isRequired
}

const mapStateToProps = state => ({
    curses: getVisibleCourses(state.courses)
})

export default connect(mapStateToProps)(CoursesContainer)