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

export { createNote, toggleImportanceOf };