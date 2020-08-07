import React, { Component } from 'react';

export class SignUpForm extends Component {
	state = {
		first: '',
		last: '',
		state: '',
		username: '',
		password: '',
		passwordConfirmation: '',
		bio: '',
	};

	handleChange = e => {
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
			<div>
				<form className='auth-form' onSubmit={this.handleSubmit}>
					<input
						name='first'
						value={this.state.first}
						onChange={this.handleChange}
						placeholder='First Name'
					/>
					<input
						name='last'
						value={this.state.last}
						onChange={this.handleChange}
						placeholder='last Name'
					/>
					<input
						name='state'
						value={this.state.state}
						onChange={this.handleChange}
						placeholder='state'
					/>
					<input
						name='bio'
						value={this.state.bio}
						onChange={this.handleChange}
						placeholder='Bio'
					/>
					<input
						name='username'
						value={this.state.username}
						onChange={this.handleChange}
						placeholder='username'
					/>
					<input
						name='password'
						value={this.state.password}
						type='password'
						onChange={this.handleChange}
						placeholder='password'
					/>
					<input
						name='passwordConfirmation'
						value={this.state.passwordConfirmation}
						type='password'
						onChange={this.handleChange}
						placeholder='password confirmation'
					/>
					<button className='login' type='submit'>
						Sign Up
					</button>
				</form>
			</div>
		);
	}
}

export default SignUpForm;
