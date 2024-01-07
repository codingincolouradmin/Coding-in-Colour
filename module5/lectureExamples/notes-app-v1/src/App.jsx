import { useState, useEffect } from 'react'
import noteService from './services/notes'

const App = () => {
  const [notes, setNotes] = useState([]) // stores our notes

  useEffect(() => {
    syncNotes()
  }, [])

  // Syncs our notes
  const syncNotes = () => {
    noteService
      .getNotes()
      .then((response) => setNotes(response))
  }

  // Handles what happens when we click 'send' -> updates the notes
  const handleClickSend = (e) => {
    e.preventDefault()
    console.log('hi')
  }

  return (
    <div>
      <h2>notes</h2>
      <ul>
        {notes.map(note => <li key={note.id}>{note.content}</li>)}
      </ul>
      <h2>add a note</h2>
      <form onSubmit={handleClickSend}>
        message <input name="message-input"/>
        <button type="submit">send</button>
      </form>
    </div>
  )
}

export default App
