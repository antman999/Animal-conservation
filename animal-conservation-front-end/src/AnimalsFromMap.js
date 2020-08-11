import React, { Component } from 'react'
import { Grid ,Card, Image } from 'semantic-ui-react';
export class AnimalsFromMap extends Component {
  render() {
    const { img, id, name } = this.props;
		return (
	
			<div className='animalscards'>
					
							<Card>
								<Image src={img} wrapped ui={false} />
								<Card.Content>
									<Card.Header>{name}</Card.Header>
									<Card.Meta>Joined in 2016</Card.Meta>
									<Card.Description>
										Daniel is a comedian living in Nashville.
									</Card.Description>
								</Card.Content>
								<Card.Content extra>
									<button
										onClick={() => this.props.propspush.push(`/animals/${id}`)}
										type='button'>
										See More Info
									</button>
								</Card.Content>
							</Card>

			</div>

	



		);
  }
}

export default AnimalsFromMap
