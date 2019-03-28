import React from 'react'

function PlanetDetail(props) {
   
    return (
        <div className='planet-item'>
            {props.planet.num_moons}
        </div>
    )
}

export default PlanetDetail