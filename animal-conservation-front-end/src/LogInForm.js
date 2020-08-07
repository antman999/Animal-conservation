import React, { Component } from 'react'

export class LogInForm extends Component {
  state = {
    username: '',
    password:''
  }
  handleChange = e => { this.setState({ [e.target.name]: e.target.value }) }
  
  handleSubmit = e => {
    e.preventDefault()

    fetch('http://localhost:3000/api/v1/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password,
      }),
    })
      .then(resp => resp.json())
      .then(response => {
        //set user to state
        //redirect!
        if (response.errors) {
          alert(response.errors)
        } else {
          this.props.setUser(response)
        }
      })
      }
  
  

  render() {
    return (
			<div>
				<form onSubmit={this.handleSubmit}> 
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
          <button className='login' type='submit'>Log In</button>
				</form>
			</div>
		);
  }
}

export default LogInForm
