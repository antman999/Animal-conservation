import React from 'react'
import { Card, Image, Icon, Popup} from 'semantic-ui-react';

const Organizations = (props) => {
  console.log(props.organizations)
  return (
		<div className='cc'>
			<Card.Group itemsPerRow={4}>
				{props.organizations.map(animals => (
						<Popup
										trigger={
											<Card>
												<Image  src={animals.img} wrapped ui={true} className='orgpic1' />

												<Card.Content>
													<Card.Header className='orgName'>
													{animals.name}
													</Card.Header>

													{/* <Card.Description>
            {f.mission}
          </Card.Description> */}
												</Card.Content>
											</Card>
										}>
										<Popup.Header>Additional Information</Popup.Header>
										<Popup.Content>{animals.mission}</Popup.Content>
										<Popup.Header>Since</Popup.Header>
										<Popup.Content>
											{animals.since ? animals.since : 'Not Found'}
										</Popup.Content>
									</Popup>
					
				))}
			</Card.Group>
		</div>
	);
}
export default Organizations

// onClick = {() => props.history.push(`/animals/${animals.id}`)}