const Person = ({ person, onDelete, onUpdate }) => {
  return (
    <li>
      <div className="list-item">
        <p>{person.name}</p> 
        <p>{person.number}</p>
        <button onClick={(e) => onDelete(e, person.id)}>
          delete
        </button>
        <button onClick={(e) => onUpdate(e, person.id)}>
          {person.favourite ? 'unfavourite' : 'favourite'}
        </button>
      </div>  
    </li>
  )
}

const Persons = ({ persons, favouriteOnly, onDelete, onUpdate }) => {
  return (
    <ol>
      {persons
        .filter(person => person.favourite == favouriteOnly)
        .map(person => 
          <Person key={person.id} person={person} onDelete={onDelete} onUpdate={onUpdate} />)}
    </ol>
  )
}

export default Persons;