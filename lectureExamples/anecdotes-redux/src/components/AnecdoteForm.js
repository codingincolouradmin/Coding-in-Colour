import { useDispatch } from 'react-redux';
import { createAnecdote } from '../reducers/anecdoteReducer';

const AnecdoteForm = () => {
    const dispatch = useDispatch();

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const content = e.target.content.value;
        dispatch(createAnecdote({
            content
        }))
        e.target.content.value = '';
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <input name="content"/>
            <button type="submit">submit</button>
        </form>
    )
}

export default AnecdoteForm