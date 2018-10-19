import React, { Component } from 'react';

class PlanetList extends Component {

  render() {

    return (
        <ul>
           {JSON.stringify(this.props.planetList, null, 2)} 
          {this.props.planetList.map(planet => <li key={planet.name}>{planet.name}</li> )}
        </ul>
    );
  }
}

export default PlanetList;