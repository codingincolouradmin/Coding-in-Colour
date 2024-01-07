import { useState, useEffect } from 'react'
import noteService from './services/notes'

const App = () => {
  const [notes, setNotes] = useState([]) // stores our notes

  useEffect(() => {
    syncNotes()
  }, [])

  // Syncs our notes with mockAPI
  const syncNotes = () => {
    noteService
      .getNotes()
      .then((response) => setNotes(response))
  }

  // Handles what happens when we click 'send' -> updates the notes
  const handleClickSend = (e) => {
    e.preventDefault()
    const content = e.target['message-input'].value // gets value from input
    e.target['message-input'].value = ''  // resets input to empty string
    noteService
      .sendNote(content)
      .then((response) => {
        console.log('added note ', response)
        syncNotes()
      })
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
