import Note from './Note';

function Notes({notes}) {
    // notes is an array, ["Hello from France", "Hello from Canada"]
    return (
        <div className="notes">
            <h1>Notes</h1>
            {notes.map((note) => <Note noteTextContent={note}/>)}

            {/* [
            <Note text={"Hello from France"}/>, 
            <Note text={"Hello from Canada"}/>
            ]

            [
                <div className="note">
                    <li>
                        "Hello from France"
                    </li>
                </div>,
                <div className="note">
                    <li>
                        "Hello from Canada"
                    </li>
                </div>
            ] */}
        </div>
    )
}

export default Notes;