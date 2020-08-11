import React from 'react'
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

const AllAnimalsContainer = (props) => {
  return (
		<>
			{props.allAnimals.map(animals => (
				<Container>
					<Row>
						<Col xs={6} md={4}>
              <Image src={animals.img} thumbnail />
						</Col>
					</Row>
				</Container>
			))}
		</>
	);
}
export default AllAnimalsContainer