import { useSelector } from 'react-redux';

const Anecdote = ({anecdote, onVoteClick}) => {
    return (
        <li>
            {anecdote.content}
            <div>
                <strong>votes: {anecdote.votes}</strong>
                <br/>
                <button onClick={(e) => onVoteClick(e, anecdote.id)}>vote</button>
            </div>
        </li>
    )
}

const AnecdoteList = ({anecdotes, onVoteClick}) => {
    const filter = useSelector(state => { return state.filter }); // grab the filter from redux store

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
                    return <Anecdote key={anecdote.id} anecdote={anecdote} onVoteClick={onVoteClick}/>
                })}
            </ul>
        </div>
    )
}

export default AnecdoteList;