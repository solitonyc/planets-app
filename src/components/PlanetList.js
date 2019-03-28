import React from 'react'
import PlanetDetail from './PlanetDetail';

function PlanetList(props) {
    
    const planets = props.planets.map(planet => {
        return <PlanetDetail planet={planet} key={planet.id} />
    })

    return (
        <div className="planet-list">
            {planets}
        </div>
    )
}

export default PlanetList