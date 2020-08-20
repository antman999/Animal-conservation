import React from 'react'
import { Link } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';


const Footer=(props)=> {
  return (
		<>
			<footer className='site-footer'>
				<div className='container'>
					<div className='row'>
						<div className='col-sm-12 col-md-6'>
							<h6>About The Project</h6>
							<p className='text-justify'>
								'Our Planet' was made To Bring Awareness to endangered species
								or species extinction in a visual way. Here you can pick a state
								from the map and it will show you the most at risks species for
								that state. Once clicked you can view organizations helping this
								species and click to view their sites. Another great way to help
								is as a user you can help researchers and organizations know if
								you seen this animal somewhere.
							</p>
						</div>
						<div className='col-xs-6 col-md-3'>
							<h6>Quick Links</h6>
							<ul className='footer-links'>
								<li>
									<Link to='/animals'> View all Animals</Link>
								</li>
								{props.currentUser ? (
									<Link to='/profile'>View My Profile</Link>
								) : (
									<Link to='/login'>log In</Link>
								)}
								<li>
									{props.currentUser ? null : <Link to='/signup'>sign-up</Link>}
								</li>
								<li>
									<Link to='/organizations'>View all Organizations</Link>
								</li>
							</ul>
						</div>
						<div className='container'>
							<div className='row'>
								<div className='col-md-8 col-sm-6 col-xs-12'>
									<p className='copyright-text'>
										© {new Date().toISOString().substring(0, 4)} Anthony Mendoza
									</p>
								</div>

								<div className='col-md-4 col-sm-6 col-xs-12'>
									<ul className='social-icons'>
										<li>
											<a className='facebook' href='#'>
												<i className='fa fa-facebook'>
													{<Icon link name='github' size='large' />}
												</i>
											</a>
										</li>
										<li>
											<a className='twitter' href='#'>
												<i className='fa fa-twitter'>
													
													{<Icon link name='linkedin' size='large' />}
												</i>
											</a>
										</li>
									
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</footer>
		</>
	);
}

export default Footer
