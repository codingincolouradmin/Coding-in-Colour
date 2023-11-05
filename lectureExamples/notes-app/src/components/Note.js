
function Note({noteTextContent}) {

    return (
        <div className="note">
            <li>
                {noteTextContent}
            </li>
        </div>
    )
}

export default Note;