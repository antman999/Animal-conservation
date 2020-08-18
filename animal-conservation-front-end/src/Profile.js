import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {
	Button,
	Dropdown,
	Popup,
	Card,
	Image,
	Rating,
} from 'semantic-ui-react';

export class Profile extends Component {
	state = {
		user: [],
		organization: [],
	};

	componentDidMount() {
		fetch(`http://localhost:3000/api/v1/users/${localStorage.user_id}.json`)
			.then(resp => resp.json())
			.then(data =>
				this.setState({
					user: data,
					organization: data.organizations,
				})
			);
	}

	render() {
		console.log(this.state.user.img);
		return (
			<>
				<div className='dividerProfile'>
					<Container className='md' fluid='md'>
						<div className='profilePicSide'>
							<Image
								className='ppic'
								src={this.state.user.img}
								size='medium'
								circular
							/>
						</div>
						<div className='ProfileInfo'>
							<h1 className='first'>{this.state.user.first}</h1>
							<h1 className='first'>{this.state.user.last}</h1>
							<Button.Group color='grey'>
								<Button>More Options</Button>
								<Dropdown
									icon='settings'
									className='button icon'
									floating
									type='file'>
									<Dropdown.Menu>
										<Dropdown.Item onClick={this.props.logOut} text='Log Out' />
										<Dropdown.Item onClick={this.props.logOut} text='Coming Soon' />
									</Dropdown.Menu>
								</Dropdown>
							</Button.Group>
						</div>
						<div className='addinfo'>
							<h3 className='addh'>Username</h3>
							<p className='uinfo'>@{this.state.user.username}</p>
							<h3 className='addh'>Location</h3>
							<p className='uinfo'>{this.state.user.state}, US</p>
							<h3 className='addh'>Bio</h3>
							<p className='uinfo'>{this.state.user.bio}</p>
						</div>
					</Container>
				</div>
				<h1 className='ogsupport'>Organizations I Support </h1>
				<div className='pdiv'>
					<Container className='tmd' fluid='md'>
						<Card.Group itemsPerRow={3}>
							{this.state.organization.length > 0 ? (
								this.state.organization.map(f => (
									<Popup
										trigger={
											<Card>
												<Image src={f.img} size='small' className='orgpic1' />

												<Card.Content>
													<Card.Header className='orgName'>
														{f.name}
													</Card.Header>
												</Card.Content>
											</Card>
										}>
										<Popup.Header>Additional Information</Popup.Header>
										<Popup.Content>{f.mission}</Popup.Content>
										<Popup.Header>Since</Popup.Header>
										<Popup.Content>
											{f.since ? f.since : 'Not Found'}
										</Popup.Content>
									</Popup>
									// <a href={f.link}>

									// 	<Image href={f.link} size='small' src={f.img} />
									// </a>
								))
							) : (
								<h1 className='ogsupport'>Look For Organizations </h1>
							)}
						</Card.Group>
					</Container>
				</div>
			</>
		);
	}
}

export default Profile;
