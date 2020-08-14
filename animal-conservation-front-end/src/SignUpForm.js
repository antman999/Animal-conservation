import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'semantic-ui-react';
const src = '/images/wireframe/image.png';
export class SignUpForm extends Component {
	state = {
		first: '',
		last: '',
		state: '',
		username: '',
		password: '',
		passwordConfirmation: '',
		bio: '',
		img: ''
	};

	handleChange = e => {
		console.log(e.target.value)
		this.setState({ [e.target.name]: e.target.value });
  };
  
  handleSubmit = e => {
    e.preventDefault()
    let { first, last, state, username, password, passwordConfirmation, bio } = this.state
    if (password === passwordConfirmation) {
      fetch('http://localhost:3000/api/v1/signup', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Accept': 'application/json',
      },
      body: JSON.stringify({
        first: first,
        last: last,
        state: state,
        username: username,
        password: password,
        bio: bio
      })
    })
      .then(resp => resp.json())
        .then(resp => {
          if (resp.errors) {
        alert(resp.errors)
          } else {
            this.props.setUser(resp)
      }
    })
    } else {
      alert('oops you hit a snag. Your passwords dont match')
    }
  
  }

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
