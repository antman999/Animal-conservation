import React, { Component } from 'react'
import { Grid ,Card, Image } from 'semantic-ui-react';
export class AnimalsFromMap extends Component {
  render() {
    const { img, id, name, species, critical} = this.props;
		return (
			<Card onClick={() => this.props.propspush.push(`/animals/${id}`)}>
				<Image src={img} wrapped ui={true} />
				<Card.Content>
					<Card.Header>{name}</Card.Header>
					<Card.Meta>{species}</Card.Meta>
					<Card.Description>
						{ critical  ? `The ${name} is in a critical state` : `This
						Species is Endangered`}
					</Card.Description>
				</Card.Content>
				<Card.Content extra></Card.Content>
			</Card>
		);
  }
}

export default AnimalsFromMap
