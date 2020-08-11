import React from 'react';
import { Button } from 'semantic-ui-react';
const Header = props => {
	return (
		<>
			<div className='masthead'>
				<h1 className='headingFront'>Be The Change We Need.</h1>
			</div>
			<div className='bodyFacts'>
				<div className='facts'>
					As many as 30 to 50 percent of all species are possibly heading toward
					extinction by mid-century.
				</div>

				<div className='orgs'>
					<h3 className='headinginfo'>View Organizations</h3>
					<p className='actualheadinginfo'>
						View The top Organizations making a change.
					</p>
					<Button basic color='orange'>
						Take Me There
					</Button>
				</div>
				<div className='animalsHome'>
					<h3 className='headinginfo'>View All Animals</h3>
					<p className='actualheadinginfo'>
						The current rate of extinction is 1,000 to 10,000 times higher than
						the natural extinction rate.
					</p>
					<Button basic color='orange'>
						Take Me There
					</Button>
				</div>
			</div>
		</>
	);
};

export default Header;
