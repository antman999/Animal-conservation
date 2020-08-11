import React, { Component } from 'react'
import { Link } from 'react-router-dom';

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
			<div className='app_login'>
				<div className='app__aside'></div>
        <div className='app__form'>
          <div className="FormTitle">
            	<div
						activeClassName='FormTitle__Link--Active'
						className='FormTitle__Link'>
						Log In
					</div>
          </div>
				
					<div className='FormCenter'>
						<form onSubmit={this.handleSubmit} className='FormFields'>
							<div className='FormField'>
								<label className='FormField__Label'>Username</label>
								<input
									className='FormField__Input'
									name='username'
									value={this.state.username}
									onChange={this.handleChange}
									placeholder='Enter your Username'
								/>
							</div>
							<div className='FormField'>
								<label className='FormField__Label'>Password</label>
								<input
									id='password'
									className='FormField__Input'
									name='password'
									value={this.state.password}
									type='password'
									onChange={this.handleChange}
									placeholder='Enter your Password'
								/>
							</div>
							<div className='FormField'>
								<button className='FormField__Button mr-20' type='submit'>
									Log In
								</button>
								<Link to='/signup' className='FormField__Link'>
									Create an account
								</Link>
							</div>
						</form>
					</div>
				</div>
			</div>
		);
  }
}

export default LogInForm
