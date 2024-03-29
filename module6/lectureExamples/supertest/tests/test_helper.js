/**
 * Provide the path to the test Notes model
 */
const Note = require('../models/testNote')

/**
 * Initialize our testNotes table
 */
const { v4: uuidv4 } = require('uuid')
const noteIds = []
for (let i = 0; i < 2; i++) {
  noteIds.push(uuidv4())
}

const initialNotes = [
  { id: noteIds[0], content: 'My first note', important: true },
  { id: noteIds[1], content: 'Another note!', important: false }
]

// Returns all notes from the testNotes table
const notesInDb = async () => {
  const testNotes = await Note.findAll()
  return testNotes.map(note => note.toJSON())
}

const alternate = () => {
  return Note
    .findAll()
    .then((response) => {
      return response.map(note => note.toJSON())
    })
}

// const main = async () => {
//   alternate()
//     .then((data) => console.log(data))
// }

// main()

// Clear the testNotes table
const clearData = async () => {
  await Note.destroy({
    where: {},
    truncate: true
  })
}

module.exports = {
  initialNotes,
  notesInDb,
  clearData
}