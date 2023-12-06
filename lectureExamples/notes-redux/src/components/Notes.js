import { useSelector, useDispatch } from 'react-redux';
import { toggleImportanceOf } from '../reducers/noteActions';


const Notes = () => {
    const dispatch = useDispatch();
    const notes = useSelector(state => { return state }); // gives component access to redux state

    const handleClickImportant = (e, id) => {
        e.preventDefault();
        console.log('Changing importance of note with id: ', id);
        dispatch(toggleImportanceOf(id))
    }

    return (
    <>
        <h2>Notes</h2>
        <ul>
            {notes.map((note) => {
                return (
                    <li key={note.id}>
                        {note.content} 
                        <strong>{note.important ? 'important' : ''}</strong>
                        <button onClick={(e) => handleClickImportant(e, note.id)}>{note.important ? 'Unimportant' : 'important'}</button>
                    </li>
                )
            })}
        </ul>
    </>
    )
}

export default Notes;