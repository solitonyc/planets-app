import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import RandomPlanet from './components/RandomPlanet'
import PlanetList from './components/PlanetList'
import PlanetDetail from './components/PlanetDetail'
import Welcome from './components/Welcome'
import NotFound from './components/NotFound'

class App extends Component {

  constructor() {
    super()
    this.state = {
      randomPlanet: '',
      planets: [],
    }
    this.randomClick = this.randomClick.bind(this)
  }
  randomAPI() {
    let api = 'https://wdi-nyc-planets-api.herokuapp.com/planets/random'
    fetch(api).then(response => response.json())
      .then(json => {
        this.setState({ randomPlanet: json.planet })
      }).catch(e => console.log(e))
  }

  planetsAPI() {
    let api = 'https://wdi-nyc-planets-api.herokuapp.com/planets'
    fetch(api).then(response => response.json())
      .then(json => {
        this.setState({ planets: json.planets })
      }).catch(e => console.log(e))
  }

  componentDidMount() {
    this.randomAPI();
    this.planetsAPI();
  }

  randomClick() {
    this.randomAPI()
  }

  render() {

    return (
      <BrowserRouter>
        <div className="App">
          <main>
          <Switch>
         
        

            <Route exact path="/" render={() => <Welcome />} />

            <Route exact path="/random" render={() => 
              <RandomPlanet
                randomPlanet={this.state.randomPlanet}
                handleClick={this.randomClick} 
                />} 
              />

            <Route exact path="/planets" render={() => 
              <div>
                
                <PlanetList
                  planets={this.state.planets}
                />
              </div>
            } />
            
            <Route exact path="/planets/:planetName" render={(props) => 
              <div>
                
                <PlanetDetail
                  {...props}
                  planets={this.state.planets}
                />
              </div>
            } />
             <Route component={NotFound} />
            </Switch>
          </main>
        </div>
       

      </BrowserRouter>
    );
  }
}

export default App;
