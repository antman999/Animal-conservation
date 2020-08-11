import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = props => {
	return (
		<>
			<header>
				<div className='container'>
					<h1 className='logo'>
						<Link to='/'>home</Link>
					</h1>

					<nav>
						<ul>
						
							<li>
								<Link to='/animals'>all animals</Link>
							</li>
							<li>
								<Link to='/animals'>On The Rise</Link>
							</li>
							<li>
								{props.currentUser.length > 1 ? '' : <Link to='/signup'>sign-up</Link>}
							</li>
							<li>
								{props.currentUser.length > 1 ? (
									<Link to='/profile'>{props.currentUser.username}</Link>
								) : (
									<Link to='/login'>log In</Link>
								)}
							</li>
						</ul>
					</nav>
				</div>
			</header>

		
		</>
	);
}
export default NavBar