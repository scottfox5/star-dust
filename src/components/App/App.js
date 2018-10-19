import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import CurrentStar from '../CurrentStar/CurrentStar';
import StarForm from '../StarForm/StarForm';
import StarList from '../StarList/StarList';
import PlanetList from '../PlanetList/PlanetList';
import axios from 'axios';

class App extends Component {

  state = {
    newStar: {
      name: '',
      diameter: '',
    },
    starList: [
      {name: 'A', diameter: 111},
      {name: 'B', diameter: 111},
      {name: 'C', diameter: 111},
    ],
    planetList: []  
  }

  handleChangeFor = propertyName => {
    return (event) => {
      this.setState({
        newStar: {
          ...this.state.newStar,
          [propertyName]: event.target.value
        } 
      });
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      starList: [...this.state.starList, this.state.newStar]
    })
  }

  componentDidMount() {
    axios({
      method: "GET",
      url: "https://swapi.co/api/planets/"
    }).then(response => {
      this.setState({
        planetList: response.data.results,
      });
    });
  }

  render() {

    return (
      <div className="App">
        <Header />
        <br />
        <CurrentStar newCurrentStar={this.state.newStar} />
        <br />
        <StarForm 
        newStar={this.state.starList} 
        handleChangeFor={this.handleChangeFor}
        handleSubmit={this.handleSubmit}          
                  />
        <br />
        <StarList starList={this.state.starList} />
        <PlanetList planetList={this.state.planetList} />
        <br />
        
        
      </div>
    );
  }
}

export default App;