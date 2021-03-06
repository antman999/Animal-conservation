import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home';
import AnimalShowPage  from './AnimalShowPage'
import SignUpForm from './SignUpForm';
import LogInForm from './LogInForm';
import AllAnimalsContainer from './AllAnimalsContainer';
import Profile from './Profile';
import Organizations from './Organizations';
import Footer from './Footer';
import OnRise from './OnRise';


const STATESAPI = 'http://localhost:3000/api/v1/states.json';

export class App extends Component {
	state = {
		states: [],
		selectedState: '',
		currentUser:null,
		animals: [],
		organizations:[]
	};

	componentDidMount() {
		fetch(STATESAPI)
			.then(resp => resp.json())
			.then(resp => this.setState({ states: resp }));
		fetch('http://localhost:3000/api/v1/organizations.json')
			.then(resp => resp.json())
			.then(resp => this.setState({ organizations: resp }));
		fetch('http://localhost:3000/api/v1/animals.json')
			.then(resp => resp.json())
			.then(resp => this.setState({ animals: resp }));
		const user_id = localStorage.user_id
		if (user_id) {
			fetch('http://localhost:3000/api/v1/auto_login', {
				headers: {
					"Authorization":user_id
				}
			})
				.then(resp => resp.json())
				.then(resp => {
					if (resp.errors) {
					alert(resp.errors)
					} else {
						this.setState({
							currentUser:resp
						})
				}
			} )
		}
	}

	setUser = user => {
	
		this.setState({
			currentUser:user
		}, () => {
			localStorage.user_id = user.id
				this.props.history.push('/')
		})
	}

	logOut = () => 	{this.setState({
			currentUser:null
		}, () => {
			localStorage.removeItem("user_id")
				this.props.history.push('/login')
		})
	}

	handleStateClick = e => {
		this.setState({ selectedState: e.target.id });
	};

	render() {
		let clickedState = this.state.states.find(
			state => state.short === this.state.selectedState
		);
		
		return (
			<div className='app'>
				<NavBar currentUser={this.state.currentUser} />
				<Switch>
					<Route
						exact
						path='/animals/:id'
						render={routerProps => (
							<AnimalShowPage
								currentUser={this.state.currentUser}
								{...routerProps}
							/>
						)}
					/>

					<Route
						exact
						path='/login'
						render={routerProps => <LogInForm setUser={this.setUser} />}
					/>

					<Route
						exact
						path='/signup'
						render={routerProps => <SignUpForm setUser={this.setUser} />}
					/>

					<Route
						exact
						path='/animals'
						render={routerProps => (
							<AllAnimalsContainer
								allAnimals={this.state.animals}
								{...routerProps}
							/>
						)}
					/>

					<Route
						exact
						path='/rise'
						render={routerProps => (
							<OnRise
								allAnimals={this.state.animals}
								{...routerProps}
							/>
						)}
					/>

					<Route
						exact
						path='/organizations'
						render={routerProps => (
							<Organizations
								{...routerProps}
								organizations={this.state.organizations}
							/>
						)}
					/>

					<Route
						exact
						path='/profile'
						render={routerProps => (
							<Profile logOut={this.logOut} {...routerProps} />
						)}
					/>

					<Route
						exact
						path='/'
						render={routerProps => (
							<Home
								handleStateClick={this.handleStateClick}
								stateAnimals={clickedState}
								{...routerProps}
							/>
						)}
					/>
				</Switch>
				<Footer currentUser={this.state.currentUser} />
			</div>
		);
	}
}

export default App;
