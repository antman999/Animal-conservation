import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Image } from 'semantic-ui-react';

export class Profile extends Component {
  render() {
    console.log(this.props.currentUser)
    return (
			<>
				<Container className='md' fluid='md'>
					<Image
						src='https://react.semantic-ui.com/images/wireframe/square-image.png'
						size='medium'
						circular
					/>
					<div className='username'>@{this.props.currentUser.username}</div>
					<div ClassName='bio'>BIO:{this.props.currentUser.bio}</div>
				</Container>
			</>
		);
  }
}

export default Profile
