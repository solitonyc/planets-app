import React, {Component} from 'react'
class PlanetDetail extends Component {
   constructor(props){
       super(props)
   }
    
    render () {
        const { planets, match: { params: { planetName }}} = this.props
        const selectedPlanet = planets.find(planet => {
            return planet.name === planetName
        })

        return (
            selectedPlanet &&
            <div className='planet-item'>
                <p>Name: {selectedPlanet.name}</p>
                <p>Color: {selectedPlanet.color}</p>
                <p> Number of Moons: {selectedPlanet.num_moons}</p>
                <hr></hr>
            </div>
        )
    }
    
}

export default PlanetDetail