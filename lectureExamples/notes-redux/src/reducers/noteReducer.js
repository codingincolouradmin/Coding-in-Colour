const initialNotes = [
    { id: 1, content: 'Mangoes are my favourite', important: false },
    { id: 2, content: 'Redux is useful for state management', important: true },
    { id: 3, content: 'Always eat your vegetables', important: true }
]

const createNote = (note) => {
    return {
        type: 'CREATE',
        payload: { note }
    }
}

const toggleImportanceOf = (id) => {
    return {
        type: 'SET_IMPORTANCE',
        payload: { id }
    }
}

const noteReducer = (state = initialNotes, action) => {
    console.log(action);
    switch (action.type) {
      case 'CREATE':
        const newNote = action.payload.note
        return state.concat({
          id: state.length + 1,
          content: newNote,
          important: true
        });
      case 'SET_IMPORTANCE':
        const importantId = action.payload.id;
        return state.map((note) => {
          return (note.id == importantId ? {...note, important: !note.important} : note)
        });
      default: 
      return state;
    }
}

export { createNote, toggleImportanceOf, noteReducer }


