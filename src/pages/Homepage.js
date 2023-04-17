import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

import ReactGA from 'react-ga';

ReactGA.initialize('G-EB8KV61KCW')
const Homepage = () => {

    // useEffect(() => {
    //     ReactGA.pageview(window.location.pathname + window.location.search) 
    // })
    return (
        <div>
            Homepage
            <Link to={'/form'}>Forms</Link>
        </div>
    )
}

export default Homepage