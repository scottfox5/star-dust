import React, { Component } from 'react';

class CurrentStar extends Component {

  render() {

    return (
      <>
          <p>The star {this.props.newCurrentStar.name}  has {this.props.newCurrentStar.diameter} diameter</p>
      </>
    );
  }
}

export default CurrentStar;