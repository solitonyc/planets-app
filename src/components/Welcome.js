import React from 'react'
import { Link } from 'react-router-dom';

function Welcome() {
    
    return (
        <div className="welcome">
            Welcome to Planets
            <Link to="/planets">Planets</Link> | 
            <Link to="/random">Random</Link>
        </div>
    )
}

export default Welcome