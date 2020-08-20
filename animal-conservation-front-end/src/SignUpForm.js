import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card, Image, Grid } from 'semantic-ui-react';

export class SignUpForm extends Component {
	state = {
		first: '',
		last: '',
		state: '',
		username: '',
		password: '',
		passwordConfirmation: '',
		bio: '',
		img:'',
	};

	handleChange = e => {
		this.setState({ [e.target.name]: e.target.value });
	};

	handleImg = e => {
			this.setState({ img: (e.target.value = e.target.src) });
	}

	handleSubmit = e => {
		e.preventDefault();
		let {
			first,
			last,
			state,
			username,
			password,
			passwordConfirmation,
			bio,
			img
		} = this.state;
		if (password === passwordConfirmation) {
			fetch('http://localhost:3000/api/v1/signup', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Accept: 'application/json',
				},
				body: JSON.stringify({
					first: first,
					last: last,
					state: state,
					username: username,
					password: password,
					bio: bio,
					img: img
				}),
			})
				.then(resp => resp.json())
				.then(resp => {
					if (resp.errors) {
						alert(resp.errors);
					} else {
						this.props.setUser(resp)
					
					}
				});
		} else {
			alert('oops you hit a snag. Your passwords dont match');
		}
	};

	render() {
		return (
			<div className='app_login'>
				<div className='app_aside'></div>
				<div className='app__form'>
					<div className='FormTitle'>
						<div
							activeClassName='FormTitle__Link--Active'
							className='FormTitle__Link'>
							Sign Up
						</div>
					</div>
					<form className='FormFields' onSubmit={this.handleSubmit}>
						<div className='FormField'>
							<label className='FormField__Label'>First Name</label>
							<input
								className='FormField__Input'
								name='first'
								value={this.state.first}
								onChange={this.handleChange}
								placeholder='Enter your First Name'
							/>
						</div>

						<div className='FormField'>
							<label className='FormField__Label'>Last Name</label>
							<input
								className='FormField__Input'
								name='last'
								value={this.state.last}
								onChange={this.handleChange}
								placeholder='Enter your last Name'
							/>
						</div>
						<div className='FormField'>
							<label className='FormField__Label'>Current State</label>
							<input
								className='FormField__Input'
								name='state'
								value={this.state.state}
								onChange={this.handleChange}
								placeholder='Enter your state  *optional'
							/>
						</div>
						<div className='FormField'>
							<label className='FormField__Label'>Bio</label>

							<input
								className='FormField__Input'
								name='bio'
								value={this.state.bio}
								onChange={this.handleChange}
								placeholder='Tell us about yourself'
							/>
						</div>
						<div className='FormField'>
							<label className='FormField__Label'>Username</label>
							<input
								className='FormField__Input'
								name='username'
								value={this.state.username}
								onChange={this.handleChange}
								placeholder='Enter your username'
							/>
						</div>
						<div className='FormField'>
							<label className='FormField__Label'>Password</label>
							<input
								className='FormField__Input'
								name='password'
								value={this.state.password}
								type='password'
								onChange={this.handleChange}
								placeholder='Create a password'
							/>
						</div>
						<div className='FormField'>
							<label className='FormField__Label'>Confirm password</label>
							<input
								className='FormField__Input'
								name='passwordConfirmation'
								value={this.state.passwordConfirmation}
								type='password'
								onChange={this.handleChange}
								placeholder='password confirmation'
							/>
						</div>
						<div className='FormField'>
							<label className='FormField__Label'>
								Select a Profile Picture
							</label>
							<Card.Group itemsPerRow={4}>
								<Card
									raised
									image='https://defenders.org/sites/default/files/styles/square/public/2019-12/mexican_gray_wolf_flipped_wolf_conservation_center.jpg?h=56fa5926&itok=lULlVPo4'
									circular
									onClick={this.handleImg}
									value={this.state.img}
									name='img'
								/>
								<Card
									raised
									image='https://kmph.com/resources/media/9f3b725e-20d5-4b20-b885-379722f8b98e-large1x1_AP20022860052546.jpg?1579793385894'
									circular
									onClick={this.handleImg}
									value={this.state.img}
									name='img'
								/>

								<Card
									raised
									image='https://cdn.shopify.com/s/files/1/1372/5395/articles/Leatherback_800x.jpg?v=1591634432'
									circular
									onClick={this.handleImg}
									value={this.state.img}
									name='img'
								/>
								<Card
									raised
									image='https://defenders.org/sites/default/files/styles/square/public/2019-04/florida_panther_fstop_foundation_header.jpg?h=984b0d80&itok=i1HlGArb'
									circular
									onClick={this.handleImg}
									value={this.state.img}
									name='img'
								/>
							</Card.Group>
						</div>

						<div className='FormField'>
							<button className='FormField__Button mr-20' type='submit'>
								Sign Up
							</button>
							<Link to='/login' className='FormField__Link'>
								I Already have an account
							</Link>
						</div>
					</form>
				</div>
			</div>
		);
	}
}

export default SignUpForm;
