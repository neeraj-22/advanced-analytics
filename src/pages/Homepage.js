import React from 'react'
import { Link } from 'react-router-dom'

const Homepage = () => {
    return (
        <div>
            Homepage
            <Link to={'/form'}>Forms</Link>
        </div>
    )
}

export default Homepage