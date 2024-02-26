import { useState, useEffect } from 'react'

/**
 * Import services
 */
import phonebookServices from '../services/phonebook'
import loginServices from '../services/login'
import userServices from '../services/user'

/**
 * Component imports
 */
import ContactList from './ContactList'
import ContactForm from './ContactForm'
import LoginForm from './LoginForm'

const App = () => {
  const [user, setUser] = useState(null)
  const [contacts, setContacts] = useState([])

  console.log(contacts)

  useEffect(() => {
    if (user) {
      syncData()
    }
  }, [user])

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

  /**
   * Handles login, returns user if correct login, error otherwise
   * @param {Object} user 
   */
  const handleLogin = (user) => {
    loginServices
      .loginUser(user)
      .then((response) => {
        setUser(response)
      })
      .catch((error) => console.log(error))
  }

  /**
   * Handles logout, sets user to null
   */
  const handleLogout = () => {
    setUser(null)
  }

  /**
   * Handles user creation, returns user if correct, error otherwise
   * (also performs login indirectly)
   * @param {Object} newUser 
   */
  const handleCreate = (newUser) => {
    userServices
      .createUser(newUser)
      .then((response) => {
        setUser(response)
      })
      .catch((error) => console.log(error))
  }

  return (
    <div>
      <h1>Phonebook</h1>
      <LoginForm onLogin={handleLogin} onCreate={handleCreate} onLogout={handleLogout} user={user}/>
      { user
      ? <>
          <h2>favourites</h2>
          <ContactList contacts={contacts} favouriteOnly={true} onDelete={handleDelete} onUpdate={handleUpdate} />
          <h2>contacts</h2>
          <ContactList contacts={contacts} favouriteOnly={false} onDelete={handleDelete} onUpdate={handleUpdate} />
          <h2>add a contact</h2>
          <ContactForm onAdd={handleAdd}/>
        </>
      : null
      }
    </div>
  )
}

export default App
