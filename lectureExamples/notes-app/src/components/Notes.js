import Note from './Note';

function Notes({notes}) {

    return (
        <div className="notes">
            <h1>Notes</h1>
            <ul>
                {notes.map((note) => <Note note={note}/>)}
            </ul>
        </div>
    )
}

export default Notes;