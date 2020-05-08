import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state={
    person:[{id:'easd', name:'jassi', age:'11'},
  {id:'edsa', name:'vishak', age:'22'},
  {id:'eads', name:'raman', age:'23'}],
  showPersons:false
  }
  
  deleteToggle = (personIndex) =>{
const persons = this.state.person;
persons.splice(personIndex,1);
this.setState({persons:persons})
  }

  tooglePerson = () =>{
 const doesShow = this.state.showPersons;
 this.setState({showPersons: !doesShow})
  }
 
  toogleHander = (event) => {
    this.setState({
    person:[{name:'karan', age:'21'},
  {name: event.target.value, age:'21'},
  {name:'kann', age:'43'}]
    })
  }


  render() {
    const color = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '3px solid orange',
      padding:'8px'
    };
    let persons =null;
    if(this.state.showPersons){
      persons = (<div>
      {this.state.person.map((person,index) => {
        return <Person click={() => this.deleteToggle(index)} name={person.name} age={person.age}
        key={person.id}/>
      })}
        </div> );   
    }
    return (
      <div className="App">
        <h1>jasmeet singh</h1>
        <button style={color} onClick={this.tooglePerson}>switch</button>
        {persons}
      </div>
    );
  }
}

export default App;
