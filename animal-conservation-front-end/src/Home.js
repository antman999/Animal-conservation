import React, { Component } from 'react'
import Map from './Map'
import Header from './Header'
import AnimalsFromMap from './AnimalsFromMap'
import { Container,Card } from 'semantic-ui-react';


export class Home extends Component {

  render() { 
    
    return (
			<>
				<Header />
				<Map handleStateClick={this.props.handleStateClick} />
				<div className='parentCards'>
					<Card.Group itemsPerRow={3}>
						{this.props.stateAnimals
							? this.props.stateAnimals.animals.map(animals => (
									<AnimalsFromMap
										id={animals.id}
										name={animals.name}
										img={animals.img}
								
										// count={animals.count}
										// description={animals.description}
										// habitat={animals.habitat}
										// critical={animals.critical}
										// rise={animals.rise}
										// species={animals.species}
										// threats={animals.threats}
										propspush={this.props.history}
									/>
							  ))
							: ''}
					</Card.Group>
				</div>
			</>
		);
  }
}

export default Home
