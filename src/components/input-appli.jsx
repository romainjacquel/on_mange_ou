import React, { Component } from 'react'
import {InputGroup, FormControl, Button} from 'react-bootstrap'

const initialState = {InputText : "", placeHolder:"Entrez un restaurant", locations:[], randomLocation:null, clicked:false}

class InputAppli extends Component  {

constructor(props){
    super(props)
    this.state = initialState
}


handleChange(event){
  this.setState({InputText:event.target.value})
}

addLocation(){
  // add location in array of state
  this.setState(prevState => ({
    locations : [...prevState.locations, this.state.InputText]
  }))
  // reset Input
  this.setState({InputText:""})
}

renderRandomLocation(){
  this.setState({clicked:true,randomLocation:this.state.locations[Math.floor(Math.random()*this.state.locations.length)]})
}

reset(){
  this.setState(initialState)
}

render () {

let renderLocations = this.state.locations.map((location)=><li key={location}>{location}</li>);

return (
    <div>  
    <InputGroup className="mb-3 input_appli">
    <FormControl className="form_appli" value={this.state.InputText} onChange={this.handleChange.bind(this)}
      placeholder={this.state.placeHolder}
    />
    
    <InputGroup.Append>
      <Button variant="outline-primary" onClick={this.addLocation.bind(this)}>Ajouter</Button>
      <Button variant="outline-success" onClick={this.renderRandomLocation.bind(this)}>Mélanger</Button>
      <Button variant="outline-danger"  onClick={this.reset.bind(this)}>Reset</Button>
    </InputGroup.Append>
  </InputGroup>
  <ul>
    {renderLocations}
  </ul>
  <p>Résultat : {this.state.clicked && this.state.randomLocation}</p>
  </div>
   
          
)
}
}

export default InputAppli