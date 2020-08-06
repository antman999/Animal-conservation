import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home'


const STATESAPI = 'http://localhost:3000/api/v1/states.json';

export class App extends Component {
	state = {
		states: [],
		selectedState:''
	};

	componentDidMount() {
		fetch(STATESAPI)
			.then(resp => resp.json())
			.then(resp => this.setState({ states: resp }));
	}

 handleStateClick = e => {
	 this.setState({ selectedState: e.target.id })
  }


	render() {
	
		return (
			<div className='app'>
			<NavBar />
				<Switch>
					<Route exact path='/animals/:id' render={() => <p>hi</p>} />

					<Route exact path='/login' render={() => <p>hi</p>} />

					<Route exact path='/signup' render={() => <p>hi</p>} />

					<Route exact path='/animals' render={() => <p>hi</p>} />

					<Route exact path='/organizations' render={() => <p>hi</p>} />

					<Route exact path='/profile' render={() => <p>hi</p>} />

					<Route exact path='/' render={(routerProps) => <Home handleStateClick={this.handleStateClick} {...routerProps}/>}/>
				</Switch>
			</div>
		);
	}
}

export default App;
