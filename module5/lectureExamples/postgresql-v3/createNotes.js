const Note = require('./models/note')

Note.sync().then(() => {
    console.log('Notes table created')

    Note.bulkCreate([
      { content: 'This is my first note', important: true },
      { content: 'Second note is not important', important: false },
      { content: 'Third time is a charm', important: true }
    ]).then(() => console.log('Notes were created'))
      .catch((error) => console.log(`Error creating notes: ${error}`))

  }).catch((error) => {
    console.log('Error creating table: ', error)
  })

