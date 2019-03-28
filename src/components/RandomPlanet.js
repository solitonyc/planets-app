import React from 'react'

function RandomPlanet(props) {
    function onClick() {
        props.handleClick()
    }
    return (
        <div className="random">
            <p>Name: {props.randomPlanet.name}</p>
            <p>Color: {props.randomPlanet.color}</p>
            <p> Number of Moons: {props.randomPlanet.num_moons}</p>
            <button onClick={onClick}>Random Planet</button>
        </div>
    )
}

export default RandomPlanet