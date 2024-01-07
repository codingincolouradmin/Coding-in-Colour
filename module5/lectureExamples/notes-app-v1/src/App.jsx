import { useState } from 'react'

const App = () => {
  const [notes, setNotes] = useState(['hello', 'mangoes']) // stores our notes

  // Handles what happens when we click 'send' -> updates the notes
  const handleClickSend = (e) => {
    e.preventDefault()
    console.log('hi')
  }

  return (
    <div>
      <h2>notes</h2>
      <ul>
        {notes.map(note => <li>{note}</li>)}
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
