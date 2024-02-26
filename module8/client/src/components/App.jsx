import { useState, useEffect } from 'react'

/**
 * Import services
 */
import phonebookServices from '../services/phonebook'

/**
 * Component imports
 */
import ContactList from './ContactList'
import ContactForm from './ContactForm'

const App = () => {
  const [contacts, setContacts] = useState([])

  console.log(contacts)

  useEffect(() => {
    syncData()
  }, [])

  /**
   * 
   */
  const syncData = () => {
    phonebookServices
      .getContacts()
      .then(data => setContacts(data))
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
      .createContact({ name, number })
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
      .deleteContact(id)
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
      .updateContact(id)
      .then(() => syncData())
  }

  return (
    <div>
      <h1>Phonebook</h1>
      <h2>favourites</h2>
      <ContactList contacts={contacts} favouriteOnly={true} onDelete={handleDelete} onUpdate={handleUpdate} />
      <h2>contacts</h2>
      <ContactList contacts={contacts} favouriteOnly={false} onDelete={handleDelete} onUpdate={handleUpdate} />
      <h2>add a contact</h2>
      <ContactForm onAdd={handleAdd}/>
    </div>
  )
}

export default App
