import React from 'react'

import Course from './Course'

const CourseItem = ({ course }) => (
    <div style={{ marginBottom: 20 }}>
        <Course
            description={course.description}
            category={course.category} />
    </div>
)

export default CourseItem
