import React, { Component } from 'react'
import Sighting from './Sighting'
import { Image } from 'semantic-ui-react';



export class AnimalShowPage extends Component {
  state = {
    animalShown: [],
    statePicked:''
  }
  

  componentDidMount() {
    fetch(`http://localhost:3000/api/v1/animals/${this.props.match.params.id}.json`)
      .then(resp => resp.json())
    .then(data=>this.setState({animalShown:data, statePicked:data.states[0].state}) )
  }

  render() {
    
    return (
			<div className='showAnimalCard'>
				<Image src={this.state.animalShown.img} size='large' />
				<h2 className='nameAnimal'>{this.state.animalShown.name}</h2>
				<p>{this.state.animalShown.description}</p>
				<p>{this.state.animalShown.count}</p>
				<p>{this.state.animalShown.species}</p>
				<p>{this.state.animalShown.habitat}</p>
				<Sighting
					googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`}
					loadingElement={<div style={{ height: `100%` }} />}
					containerElement={<div style={{ width: `100%`, height: `100%` }} />}
					mapElement={<div style={{ width: '100vw', height: '50vh' }} />}
          name={this.state.animalShown.name}
          statePicked = {this.state.statePicked}
				/>
			</div>
		);
  }
}

export default AnimalShowPage
