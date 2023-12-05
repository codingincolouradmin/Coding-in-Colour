import React from 'react';
import {useState} from 'react';
import {createStore} from 'redux';

const peopleReducer = (state=[],action) => {
  switch(action.type){
    case 'ADD_PERSON':
      return [...state,action.payload];
    default:
      return state;
    

  }
}

export const store = createStore(peopleReducer);

export default function App() {

  
  

  // Keeps track of what the user is typing
  const [person, setPerson] = useState({
    name: '',
    age: '',
    location: ''
  })

  const handleTyping = (e) => {
    e.preventDefault()
    // Create a copy of the 'person' to keep track of what the user is typing
    const newPerson = {
      ...person,
      [e.target.name]: e.target.value
    }
    setPerson(newPerson);
  }

  const handleAddPerson = (e) => {
    e.preventDefault();
    const nextId = store.getState().length + 1;
    const newPerson = {
      id: nextId,
      ...person
    }
    store.dispatch({type:'ADD_PERSON', payload:newPerson});
    setPerson({name:'',age:'',location:''});
    
    
  }

  const people = store.getState();
  console.log(people);
  

  // const filterPerson = (person, id) => {
  //   return person.id !== id;
  // }

  return (
    <div className='App'>
      <h3>Bookings</h3>
      {people.map((person) => {
        return (
          <div key={person.id}>
            <li>{person.name}</li>
            
          </div>
        )
      })}
      <h3>Add a Booking</h3>
      Name: <input name="name" value={person.name} onChange={handleTyping} />
      <br/>
      Age: <input name="age" value={person.age} onChange={handleTyping}/>
      <br/>
      Location: <input name="location" value={person.location} onChange={handleTyping} />
      <br/>
      <button onClick={handleAddPerson}> Add Person </button>
    </div>
  );
}
