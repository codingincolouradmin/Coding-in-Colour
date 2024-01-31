/**
 * Getting the .env here is more tricky
 * If I run from inside of config, the .env exists one level outside, hence I use a path...
 */
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../.env') });

/**
 * Necessary imports to initialize database and create entries
 */
const Note = require('../models/Note')
const { v4: uuidv4 } = require('uuid')

// Generate some ids for our notes
const noteIds = []
for (let i = 0; i < 3; i++) {
  noteIds.push(uuidv4())
}

// Create Notes table
Note
  .sync()
  .then(() => {
    console.log(`Note table created`)
    Note
      .bulkCreate([
        { id: noteIds[0], content: 'My first note!', important: true },
        { id: noteIds[1], content: 'Eat your vegetables!', important: false },
        { id: noteIds[2], content: 'Never!', important: true },
      ])
      .then(() => console.log('Notes successfully added'))
      .catch((error) => console.log('Error initializing notes: ', error))
  })
  .catch((error) => {
    console.log('Error creating notes table: ', error)
  })