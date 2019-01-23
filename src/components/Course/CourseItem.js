import React from 'react'
import PropTypes from 'prop-types'

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

CourseItem.propTypes = {
    course: PropTypes.shape({
        title: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        inventory: PropTypes.number.isRequired
    }).isRequired,
    onAddToCartClicked: PropTypes.func.isRequired
}

export default CourseItem