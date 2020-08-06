import React, { Component } from 'react'
import Map from './Map'
import Header from './Header'
import AnimalsFromMap from './AnimalsFromMap'

export class Home extends Component {

  render() { 
    return (
      <>
        <Header />
        <Map handleStateClick={this.props.handleStateClick} />
        <AnimalsFromMap />
        
      </>
    );
  }
}

export default Home
