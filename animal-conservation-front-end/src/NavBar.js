import React from 'react'
import { Link } from 'react-router-dom'
import { Icon } from 'semantic-ui-react';

const NavBar = props => {
	return (
		<>
			<header className='navi'>
				<div className='container'>
					<h1 className='logo'>
						<Link to='/'>BioDiversity 	<Icon
														name='paw'/> </Link>
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
								{props.currentUser.id ? '' : <Link to='/signup'>sign-up</Link>}
							</li>
							<li>
								{props.currentUser.id ? (
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