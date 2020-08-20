import React from 'react'
import { Card, Image, Icon } from 'semantic-ui-react';

function OnRise(props) {
  return (
		<div>
			<div className='factsO'>
				99% of currently threatened species are at risk from human activities,
				primarily those driving habitat loss, introduction of exotic species,
				and global warming.
			</div>
			<div className='cc'>
				<Card.Group itemsPerRow={4}>
					{props.allAnimals.map(animals =>
						animals.rise ? (
							<Card
								onClick={() => props.history.push(`/animals/${animals.id}`)}>
								<Image src={animals.img} wrapped ui={true} />
								<Card.Content>
									<Card.Header>
										{animals.name}{' '}{' '}
                    {' '}<Icon name='arrow up' color='green' />
									</Card.Header>
									<Card.Meta>{animals.species}</Card.Meta>
									<Card.Description>
										{animals.critical
											? `The ${animals.name} is in a critical state`
											: `This Species population is rising`}
									</Card.Description>
								</Card.Content>
								<Card.Content extra>
									<a>
										<Icon name='map pin' />

										{animals.states.map(st => st.state)}
									</a>
								</Card.Content>
							</Card>
						) : null
					)}
				</Card.Group>
			</div>
		</div>
	);
}

export default OnRise
