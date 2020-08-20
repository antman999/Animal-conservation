import React from 'react'
import { Link } from 'react-router-dom'
import { Icon, Image } from 'semantic-ui-react';

const NavBar = props => {
	return (
		<>
			<header className='navi'>
				<div className='container'>
					<Link to='/'>
						<h1 className='logo'>Our Planet</h1>
					</Link>

					<nav>
						<ul>
							<li>
								<Link to='/animals'>all animals</Link>
							</li>
							<li>
								<Link to='/organizations'>Organizations</Link>
							</li>
							<li>
								<Link to='/rise'>On The Rise</Link>
							</li>
							<li>
								{props.currentUser ? '' : <Link to='/signup'>sign-up</Link>}
							</li>
							<li>
								{props.currentUser ? (
									<Link to='/profile'>
										<Image src={props.currentUser.img} avatar />
										{props.currentUser.username}
									</Link>
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