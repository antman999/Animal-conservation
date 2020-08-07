import React, { Component } from 'react'

export class AnimalsFromMap extends Component {
  render() {
    const { img, count, critical, description, habitat, id, name, rise, species, threat } = this.props;
    return (
			<div>
				<img src={img}></img>
				<p>{name}</p>
				<button
					onClick={() => this.props.propspush.push(`/animals/${id}`)}
          type='button'>
          
					See More Info
				</button>
			</div>
		);
  }
}

export default AnimalsFromMap
