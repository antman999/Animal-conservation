import React from 'react'
import { Link } from 'react-router-dom'
import  Navbar from 'react-bootstrap/Navbar';
const NavBar= props => {
	return (
		<>
			<div className='navigation'>
				<Link className='logo' to='/'>
					home
				</Link>
				<Link className='navAll' to='/animals'>
					all animals
				</Link>
				<Link className='navAll' to='/animals'>
					On The Rise
				</Link>
				<div>
					{props.currentUser ? (
						''
					) : (
						<Link className='navSignUp' to='/signup'>
							signup
						</Link>
					)}
					{props.currentUser ? (
						props.currentUser.username
					) : (
						<Link className='navLogIn' to='/login'>
							login
						</Link>
					)}
				</div>
			</div>
		</>
	);
}
export default NavBar