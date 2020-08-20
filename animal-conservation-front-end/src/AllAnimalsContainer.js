import React from 'react'
import { Card, Image, Icon } from 'semantic-ui-react';

const AllAnimalsContainer = (props) => {
	return (
		<>
			<div className='masthead2'>
				<h1 className='headingFront'>All Animals</h1>
			</div>
			<div className='cc'>
				<Card.Group itemsPerRow={4}>
					{props.allAnimals.map(animals => (
						<Card onClick={() => props.history.push(`/animals/${animals.id}`)}>
							<Image src={animals.img} wrapped ui={true} />
							<Card.Content>
								<Card.Header>{animals.name}</Card.Header>
								<Card.Meta>{animals.species}</Card.Meta>
								<Card.Description>
									{animals.critical
										? `The ${animals.name} is in a critical state`
										: `This Species is Endangered`}
								</Card.Description>
							</Card.Content>
							<Card.Content extra>
								<a>
									<Icon name='map pin' />

									{animals.states.map(st => st.state)}
								</a>
							</Card.Content>
						</Card>
					))}
				</Card.Group>
			</div>
		</>
	);
}
export default AllAnimalsContainer