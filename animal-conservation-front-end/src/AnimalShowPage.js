import React, { Component } from 'react'

export class AnimalShowPage extends Component {
  state = {
    animalShown:{}
  }

  componentDidMount() {
    fetch(`http://localhost:3000/api/v1/animals/${this.props.match.params.id}.json`)
      .then(resp => resp.json())
    .then(data=>this.setState({animalShown:data}))
  }

  render() {
    console.log(this.state.animalShown.critical)
    // let animalShow = this.props.animal.map(al => al.id ===parseInt(animalId))
    return (
      <div>
        
      </div>
    )
  }
}

export default AnimalShowPage
