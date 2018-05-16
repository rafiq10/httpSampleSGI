import React from 'react';
import axios from 'axios';
import Person from '../components/Person/Person';
import tblStyle from './peopleList.css';
import Detalle from '../components/PersonDetails/PersonDetails';
import 'purecss';


export default class People extends React.Component{
  state = {
    people: [],
    selectedPersonName: null,
    showPerson: false,
    newMemberName: null,
    newMemberAge: null,
  }


  personSelected = (pName) =>{
    this.setState({
      selectedPersonName: pName
    })
  }

  onNameChange = (e)=>{
    if (this.state.newMemberName!== e.target.value) {
      this.setState({newMemberName: e.target.value}) 
    }   
  }
  onAgeChange = (e)=>{
    this.setState({newMemberAge: e.target.value}) 
  }

  addUser = (e) =>{
    console.log(this.state.newMemberName)
    console.log(this.state.newMemberAge)
    e.preventDefault();
    const member = {
      name: this.state.newMemberName,
      age: this.state.newMemberAge
    }

    console.log(member)
    axios.post('http://localhost:1433/post/person/',member)
    .then((res)=>{
      console.log(res);
    })
  }
  componentDidMount(){
    axios.get('http://localhost:1433/people').then( res => {
      this.setState({people: res.data});

    })
  }
  render(){

    return (
      <div>
        <div className="pure-g">
            <form className="pure-form pure-u-12-24" onSubmit={this.addUser}>
              <fieldset>
                  <legend>New User</legend>
                  <input id="name" onChange={this.onNameChange} type="text" placeholder="Name" style={{margin: '1px'}}/>
                  <br/>
                  <input id="age" type="text" onChange={this.onAgeChange} placeholder="Age" style={{margin: '1px'}}/>
                  <br/>
                  <button type="submit" className="button-2" style={{margin: '1px', marginTop:'10px'}}>Add</button>
              </fieldset>
          </form>
      </div>

      <table align="center" style={{width: "120px"}}>
        <tbody className={tblStyle}>
          <tr><th style={{color: 'white', backgroundColor: 'black'}}>Name</th></tr>
          {this.state.people.map(p =>
            <Person
              key={p.name}
              name={p.name}
              clicked={() =>this.personSelected(p.name)}
            />
            )}
        </tbody>
     </table>
     <br/>
     {/* <div className="container">
     {this.state.people.map(p =>
              <div key={p.name} className="box1">
                    <p>Person Name: {p.name}</p>
                    <br/>
                    <p>Person Age: {p.age}</p>
              </div>
            )}
      </div> */}
     <Detalle pName={this.state.selectedPersonName}/>
     </div>
    )
  }
}
