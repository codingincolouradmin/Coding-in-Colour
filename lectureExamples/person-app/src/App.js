import React from 'react';
import {useState} from 'react';

export default function App() {
  const [people, setPeople] = useState([{
    id: 1,
    name: "Joe",
    age: 23,
    location: "Spain"
  }, {
    id: 2,
    name: "Xavier",
    age: 35,
    location: "France"
  }])

  // Keeps track of what the user is typing
  const [person, setPerson] = useState({
    name: '',
    age: '',
    location: ''
  })

  // console.log(people);

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
    const nextId = people.length + 1;
    const newPerson = {
      id: nextId,
      ...person
    }
    // setPeople(people.concat(newPerson)); // One way to do it
    setPeople([...people, newPerson])
    setPerson({name: '', age: '', location: ''});
  }

  const handleDeletePerson = (e, id) => {
    console.log('event', e);
    console.log('delete person with id of', id);
    const newPeople = people.filter((person) =>  {
      return person.id !== id;
    })
    setPeople(newPeople);
  }

  // const filterPerson = (person, id) => {
  //   return person.id !== id;
  // }

  return (
    <div className='App'>
      <h3>Bookings</h3>
      {people.map((person) => {
        return (
          <div>
            <li>{person.name}</li>
            <button onClick={function hello(e){handleDeletePerson(e, person.id)}}>Delete</button>
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
