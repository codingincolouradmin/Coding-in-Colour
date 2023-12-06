import { useSelector, useDispatch } from 'react-redux';
import { toggleImportanceOf } from '../reducers/noteActions';

const Note = ({note}) => {
    const dispatch = useDispatch();

    const handleClickImportant = (e, id) => {
        e.preventDefault();
        console.log('Changing importance of note with id: ', id);
        dispatch(toggleImportanceOf(id))
    }

    return (
        <li>
            {note.content} 
            <strong>{note.important ? 'important' : ''}</strong>
            <button onClick={(e) => handleClickImportant(e, note.id)}>
                {note.important ? 'Unimportant' : 'important'}
            </button>
        </li>
    )

}

const Notes = () => {
    // gives component access to redux state
    const filter = useSelector(state => state.filter)
    const notes = useSelector(state => state.notes);

    const handleFilter = (note) => {
        if (filter == 'ALL') {
            return note;
        } else if (filter == 'IMPORTANT') {
            return note.important
        } else {
            return !note.important
        }
    }

    return (
    <>
        <h2>Notes</h2>
        <ul>
            {notes.filter(handleFilter).map((note) => {
                return <Note key={note.id} note={note}/>
            })}
        </ul>
    </>
    )
}

export default Notes;