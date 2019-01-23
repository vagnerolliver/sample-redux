import React from 'react'
import PropTypes from 'prop-types'

const CoursesList = ({ title, children }) => (
    <div>
        <h3>{title}</h3>
        <div>{children}</div>
    </div>
)

CoursesList.propTypes = {
    children: PropTypes.node,
    title: PropTypes.string.isRequired
}

export default CoursesList