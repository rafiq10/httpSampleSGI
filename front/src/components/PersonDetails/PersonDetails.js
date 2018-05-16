import React from 'react';
import axios from 'axios';
import './PersonDetails.css';


class Detalle extends React.Component{
  state = {
    person: null
  }

  componentDidUpdate(){
    if (this.props.pName) {
      if ((!this.state.person) || (this.state.person && (this.state.person.name !== this.props.pName))) {
        
        axios.get('http://localhost:1433/people/' + this.props.pName).then(res => {
          this.setState({person: res.data[0]});
          console.log(res.data[0].name);
          console.log(this.props.pName);
          
      })
      }
    }
    
  }

  render(){
    let thePerson = <p>'Please select a person'</p>;
    if (this.props.pName) {
      thePerson = <p>'Lading ...  '</p>;
    }
    if (this.state.person) {
      thePerson = (
        <div className="box1">
          <p>Person Name: {this.state.person.name}</p>
          <br/>
          <p>Person Age: {this.state.person.age}</p>
        </div>
      )
    }
    return(
      thePerson
    )

  }
}

export default Detalle;