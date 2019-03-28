import React from 'react'

function RandomPlanet(props) {
    function onClick() {
        props.handleClick()
    }
    return (
        <div className="random">
            {props.randomPlanet}
            <button onClick={onClick}>Random Planet</button>
        </div>
    )
}

export default RandomPlanet