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

    // Simple styling for our anecdotes
    const anecdotesStyle = {
        display: 'flex', 
        flexDirection: 'column', 
        gap: '5px'
    }

    return (
        <div>
            <ul style={anecdotesStyle}>
                {anecdotes.map((anecdote) => {
                    return <Anecdote key={anecdote.id} anecdote={anecdote} onVoteClick={onVoteClick}/>
                })}
            </ul>
        </div>
    )
}

export default AnecdoteList;