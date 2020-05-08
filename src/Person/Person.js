import React from 'react';
import './Person.css';

const person = (props) => {
return ( <div className='person'>
    <p onClick={props.click}>my name is {props.name} and  i m {props.age} years old.</p>
    <input onChange={props.changed}></input>
</div>)
};

export default person;