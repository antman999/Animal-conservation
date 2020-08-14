import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Image } from 'semantic-ui-react';

export class Profile extends Component {

	render() {
		console.log(this.props.currentUser);
		return (
			<>
			<div className='dividerProfile'>
				<Container className='md' fluid='md'>
					<div className='profilePicSide'>
						<Image
							src='https://react.semantic-ui.com/images/wireframe/square-image.png'
							size='medium'
							circular
						/>
					</div>
					<div className='ProfileInfo'>
						<h1 className='first'>{this.props.currentUser.first}</h1>
						<h1 className='first'>{this.props.currentUser.last}</h1>
					</div>
					<div className='addinfo'>
						<h3 className='addh'>Username</h3>
						<p className='uinfo'>@{this.props.currentUser.username}</p>
						<h3 className='addh'>Location</h3>
						<p className='uinfo'>{this.props.currentUser.state}, US</p>
						<h3 className='addh'>Bio</h3>
						<p className='uinfo'>{this.props.currentUser.bio}</p>
					</div>
				</Container>
				</div>
				<Container className='2md' fluid='md'>
					
					</Container>
			</>
		);
	}
}

export default Profile;
