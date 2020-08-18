import React, { Component } from 'react'
import Map from './Map'
import Header from './Header'
import AnimalsFromMap from './AnimalsFromMap'
import { Container, Card, Placeholder, Segment, Grid} from 'semantic-ui-react';


export class Home extends Component {

  render() { 
    
    return (
			<>
				<Header />
				<Map handleStateClick={this.props.handleStateClick} />
				<h1 className='cfora'>
					These are some of the most endangered species in
				</h1>
				<div className='parentCards'>
					<Card.Group itemsPerRow={3}>
						{this.props.stateAnimals ? (
							this.props.stateAnimals.animals.map(animals => (
								<AnimalsFromMap
									id={animals.id}
									name={animals.name}
									img={animals.img}
									count={animals.count}
									// description={animals.description}
									// habitat={animals.habitat}
									critical={animals.critical}
									rise={animals.rise}
									species={animals.species}
									// threats={animals.threats}
									propspush={this.props.history}
								/>
							))
						) : (
							<Grid columns={3} stackable>
								<Grid.Column>
									<Segment raised>
										<Placeholder>
											<Placeholder.Header image>
												<Placeholder.Line />
												<Placeholder.Line />
											</Placeholder.Header>
											<Placeholder.Paragraph>
												<Placeholder.Line length='medium' />
												<Placeholder.Line length='short' />
											</Placeholder.Paragraph>
										</Placeholder>
									</Segment>
								</Grid.Column>

								<Grid.Column>
									<Segment raised>
										<Placeholder>
											<Placeholder.Header image>
												<Placeholder.Line />
												<Placeholder.Line />
											</Placeholder.Header>
											<Placeholder.Paragraph>
												<Placeholder.Line length='medium' />
												<Placeholder.Line length='short' />
											</Placeholder.Paragraph>
										</Placeholder>
									</Segment>
								</Grid.Column>

								<Grid.Column>
									<Segment raised>
										<Placeholder>
											<Placeholder.Header image>
												<Placeholder.Line />
												<Placeholder.Line />
											</Placeholder.Header>
											<Placeholder.Paragraph>
												<Placeholder.Line length='medium' />
												<Placeholder.Line length='short' />
											</Placeholder.Paragraph>
										</Placeholder>
									</Segment>
								</Grid.Column>
							</Grid>
						)}
					</Card.Group>
				</div>
			</>
		);
  }
}

export default Home
