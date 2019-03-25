import React, { Component } from 'react'
import {InputGroup, FormControl, Button} from 'react-bootstrap'

class InputAppli extends Component  {

constructor(props){
    super(props)
    this.state = {InputText : "", placeHolder:"Entrez un restaurant", locations:[]}
}


handleChange(event){
  this.setState({InputText:event.target.value})
}

addLocation(){
  this.setState(prevState => ({
    locations : [...prevState.locations, this.state.InputText]
  }))
}

render () {

return (
      
    <InputGroup className="mb-3 input_appli">
    <FormControl onChange={this.handleChange.bind(this)}
      placeholder={this.state.placeHolder}
    />
    
    <InputGroup.Append>
      <Button variant="outline-primary" onClick={this.addLocation.bind(this)}>Ajouter</Button>
      <Button variant="outline-success">Mélanger</Button>
      <Button variant="outline-danger">Reset</Button>
    </InputGroup.Append>
  </InputGroup>
        
)
}
}

export default InputAppli