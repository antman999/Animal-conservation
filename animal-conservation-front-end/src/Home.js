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
       
        {this.props.stateAnimals?this.props.stateAnimals.animals.map(animals =>
          <AnimalsFromMap
            id={animals.id}
            name={animals.name}
            img={animals.img}
            count={animals.count}
            description={animals.description}
            habitat={animals.habitat}
            critical={animals.critical}
            rise={animals.rise}
            species={animals.species}
            threats={animals.threats}
            propspush={this.props.history}
          />
    
        ):''}
      
        
      </>
    );
  }
}

export default Home
