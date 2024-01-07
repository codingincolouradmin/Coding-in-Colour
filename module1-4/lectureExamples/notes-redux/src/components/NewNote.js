import { useDispatch } from "react-redux";
import { createNote } from "../reducers/noteActions";

const NewNote = () => {
    const dispatch = useDispatch();

    const handleClickSubmit = (e) => {
        e.preventDefault();
        const note = e.target.note.value;
        e.target.note.value = '';
        dispatch(createNote(note))
    }

    return (
        <>
        <h3>Add Note</h3>
        <form onSubmit={handleClickSubmit}>
            <input name="note" />
            <button type="submit">submit</button>
        </form></>
    )
}

export default NewNote;