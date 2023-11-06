import Note from './Note';

function Notes({notes}) {
    // notes is an array, ["Hello from France", "Hello from Canada"]
    return (
        <div className="notes">
           
            {notes.map((note) => <Note noteTextContent={note.text}/>)}

            
        </div>
    )
}

export default Notes;