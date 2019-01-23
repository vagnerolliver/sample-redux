import React from 'react'
import PropTypes from 'prop-types'

const Course = ({ price, quantity, title }) => (
    <div>
        {title} - &#36;{price}{quantity ? ` x ${quantity}` : null}
    </div>
)

Course.propTypes = {
    price: PropTypes.number,
    quantity: PropTypes.number,
    title: PropTypes.string
}

export default Course