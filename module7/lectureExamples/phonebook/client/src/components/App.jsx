import { useState, useEffect } from 'react'

/**
 * Import services
 */
import phonebookServices from '../services/phonebook'

/**
 * Import components needed
 */
import Persons from './Persons'
import CreateForm from './CreateForm'

const App = () => {
  const [persons, setPersons] = useState([])

  useEffect(() => {
    syncData()
  }, [])

  /**
   * 
   */
  const syncData = () => {
    phonebookServices
      .getEntries()
      .then(data => setPersons(data))
  }
  
  /**
   * Adds a contact, by default, not favourited
   * @param {Event} e 
   */
  const handleAdd = (e) => {
    e.preventDefault()
    const name = e.target.name.value
    const number = e.target.number.value
    phonebookServices
      .createEntry({ name, number })
      .then(() => {
        e.target.name.value = ''
        e.target.number.value = ''
        syncData()
      })
  }

  /**
   * Removes a contact according to id
   * @param {Event} e 
   * @param {number} id 
   */
  const handleDelete = (e, id) => {
    e.preventDefault()
    phonebookServices
      .deleteEntry(id)
      .then(() => syncData())
  }

  /**
   * Updates a contact's favourite status
   * @param {Event} e 
   * @param {number} id 
   */
  const handleUpdate = (e, id) => {
    e.preventDefault()
    phonebookServices
      .updateEntry(id)
      .then(() => syncData())
  }

  return (
    <div>
      <h1>Phonebook</h1>
      <h2>favourites</h2>
        <Persons persons={persons} favouriteOnly={true} onDelete={handleDelete} onUpdate={handleUpdate} />
      <h2>contacts</h2>
        <Persons persons={persons} favouriteOnly={false} onDelete={handleDelete} onUpdate={handleUpdate} />
      <CreateForm onAdd={handleAdd} />
    </div>
  )
}

export default App
