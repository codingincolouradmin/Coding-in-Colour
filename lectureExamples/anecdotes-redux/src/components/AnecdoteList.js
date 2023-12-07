import { useDispatch, useSelector } from 'react-redux';
import { updateVotes } from '../reducers/anecdoteReducer';

const Anecdote = ({anecdote}) => {
    const dispatch = useDispatch();

    const handleVoteClick = (e, id) => {
        e.preventDefault();
        dispatch(updateVotes({ id }))
    }

    return (
        <li>
            {anecdote.content}
            <div>
                <strong>votes: {anecdote.votes}</strong>
                <br/>
                <button onClick={(e) => handleVoteClick(e, anecdote.id)}>vote</button>
            </div>
        </li>
    )
}

const AnecdoteList = () => {
    const filter = useSelector(state => { return state.filter }); // grab the filter from redux store
    const anecdotes = useSelector(state => { return state.anecdotes }); // grab the anecdotes from the redux store

    // Simple styling for our anecdotes
    const anecdotesStyle = {
        display: 'flex', 
        flexDirection: 'column', 
        gap: '5px'
    }

    // Logic to decide if an anecdote should be filtered or not
    const handleFilter = (anecdote) => {
        if (filter.trim() == '') {
            return true
        } else {
            return anecdote.content.includes(filter.trim());
        }
    }

    return (
        <div>
            <ul style={anecdotesStyle}>
                {anecdotes.filter(handleFilter).map((anecdote) => {
                    return <Anecdote key={anecdote.id} anecdote={anecdote} />
                })}
            </ul>
        </div>
    )
}

export default AnecdoteList;