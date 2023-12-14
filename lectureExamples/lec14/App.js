import logo from './logo.svg';
import React from 'react';
import { useState } from 'react';
import './App.css';

function App() {

  const [names, setNames] = useState([
    {
      id: 1,
      fs: "Tasneem",
      ls: "Mahmud"

    },
    {
      id: 2,
      fs: "John",
      ls: "Doe"
    }
  ])
 const [person,setPerson]= useState({
  fs:'',
  ls:''

 })
 const handletype = (e) => {
  e.preventDefault();
  const newPerson = {
    ...person,
    [e.target.name]: e.target.value
  }
  setPerson(newPerson);

 }

 const handleAddPerson = (e) => {
  e.preventDefault();
  const nextId = names.length+1;
  const newName = {
    id: nextId,
    ...person
  }
  setNames([...names,newName])
  setPerson({fs:'',ls:''})

 }


  return (
    <div className="App">
      <h1>Names</h1>
      {names.map((human)=>{
        return(
          <li>{human.fs} {human.ls}</li>
        )
      })}
      <h3>Write your name</h3>
      FirstName: <input name="fs" value={person.fs} onChange={handletype} />
      <br/>
      LastName: <input name="ls" value={person.ls} onChange={handletype} />
      <br/>
      <button onClick={handleAddPerson}>Add name</button>


      
    </div>
  );
}

export default App;
