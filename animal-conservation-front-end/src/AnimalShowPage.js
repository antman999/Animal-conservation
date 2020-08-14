import React, { Component } from 'react';
import Sighting from './Sighting';
import { Button, Icon, Image, Item, Label } from 'semantic-ui-react';
import Geocode from 'react-geocode';
import { Link } from 'react-router-dom';

export class AnimalShowPage extends Component {
	state = {
		animalShown: [],
		statePicked: '',
		organizations: [],
	};

	componentDidMount() {
		fetch(
			`http://localhost:3000/api/v1/animals/${this.props.match.params.id}.json`
		)
			.then(resp => resp.json())
			.then(data =>
				this.setState({
					animalShown: data,
					statePicked: data.states[0].state,
					organizations: data.organizations,
				})
		);
		if (this.props.currentUser.id) {
			fetch(
				`http://localhost:3000/api/v1/users/${this.props.currentUser.id}.json`
			);
		}
	}

	handleLike = e => {
		// console.log(e, this.props.currentUser.id)
		//   fetch('http://localhost:3000/api/v1/backings', {
		// 	method: 'POST',
		// 	headers: {
		// 		'Content-Type': 'application/json',
		// 		'Accept': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     organization_id:e,
    //     user_id: this.props.currentUser.id
    //   })
    // })
    //   .then(resp => resp.json())
    //     .then(resp => {
    //       if (resp.errors) {
    //     alert(resp.errors)
    //       } else {
    //       console.log(resp)
    //   }
		// })
		// let user = this.props.currentUser
		// console.log(user.organizations.find(f=>(f.id === e)))
    } 
	

	render() {
		let user = this.props.currentUser.organizations;
		console.log(this.props.currentUser);
		console.log(this.state.organizations);
		return (
			<>
				<div className='dividerS'>
					<div className='showAnimalCard'>
						<Item>
							<Item.Image src={this.state.animalShown.img} />
							<Item.Content>
								<Item.Header className='nameAnimal'>
									<h2>{this.state.animalShown.name}</h2>
									<Item.Extra>
										<Label>
											{this.state.animalShown.count
												? `Around ${this.state.animalShown.count} left${'  '}`
												: 'Count Unknown  '}
											{this.state.animalShown.rise ? (
												<Icon name='long arrow alternate up' />
											) : (
												<Icon name='long arrow alternate down' />
											)}
										</Label>
										<Label>
											<Icon name='globe' />
											{this.state.statePicked}, USA
										</Label>
									</Item.Extra>
								</Item.Header>

								<Item.Description className='des'>
									<h4>Description-</h4>
									{this.state.animalShown.description}
								</Item.Description>

								<Item.Meta className='des'>
									<h4>Habitat-</h4>
									{this.state.animalShown.habitat
										? this.state.animalShown.habitat
										: 'No Available habitat Information.'}
								</Item.Meta>
							</Item.Content>
						</Item>
					</div>
					<div className='orginfo'>
						<h2 className='orgTitle'>Organizations Helping</h2>
						<Item.Group>
							{this.state.organizations.map(og => (
								<Item>
									<a href={og.link}>
										<Item.Image href={og.link} size='tiny' src={og.img} />
									</a>

									<Item.Content className='orgmappedtitle'>
										<Item.Header>{og.name}</Item.Header>
										<Item.Meta>
											<span className='price'>
												<Label>
													{og.since ? `Since ${og.since}` : 'Since not Found'}
												</Label>
											</span>
											{this.props.currentUser.id ? (
												<span className='stay'>
													{' '}
							{user.filter(	f => f.id === og.id?
								<div>
										<Icon
															name='like'
															color='red'
															onClick={() => {
																this.handleDislike(og.id);
															}}
														/>
								</div>
								
								:
								<div>
										<Icon
															name='like'
															onClick={() => {
																this.handleLike(og.id);
															}}
														/>
								</div>
							
														
													)}
												</span>
											) : (
												<span className='stay'>
													<Link to='/login'>log In</Link> Or{' '}
													<Link to='/signup'>Sign Up</Link> To Support
												</span>
											)}
										</Item.Meta>
										<Item.Description>{og.mission}</Item.Description>
									</Item.Content>
								</Item>
							))}
						</Item.Group>
					</div>
				</div>
				<Sighting
					googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`}
					loadingElement={<div style={{ height: `100%` }} />}
					containerElement={<div style={{ width: `100%`, height: `100%` }} />}
					mapElement={<div style={{ width: '100vw', height: '70vh' }} />}
					name={this.state.animalShown.name}
					statePicked={this.state.statePicked}
				/>
			</>
		);
	}
}

export default AnimalShowPage;
