import React from 'react'

import Course from './Course'

const CourseItem = ({ course }) => (
    <div style={{ marginBottom: 20 }}>
        <Course
            title={course.title}
            price={course.price}
            quantity={course.inventory} />
        <button
            disabled={course.inventory > 0 ? '' : 'disabled'}>
            {course.inventory > 0 ? 'Add to cart' : 'Sold Out'}
        </button>
    </div>
)

export default CourseItem