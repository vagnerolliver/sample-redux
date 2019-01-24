import React from 'react'

const Course = ({ price, quantity, title }) => (
    <div>
        {title} - &#36;{price}{quantity ? ` x ${quantity}` : null}
    </div>
)

export default Course