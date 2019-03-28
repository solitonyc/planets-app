import React from 'react'
import { Link } from 'react-router-dom'

function PlanetList(props) {
    
    const planets = props.planets.map(planet => {
        return <Link to={`/planets/${planet.name}`} key={planet.id}><p>{planet.name}</p></Link>
    })

    return (
        <div className="planet-list">
            {planets} 
        </div>
    )
}

export default PlanetList