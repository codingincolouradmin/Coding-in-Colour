import { createSlice } from '@reduxjs/toolkit';

const initialState = [
    { id: 1, content: 'Software development: 1% coding, 99% figuring out why it is not working', votes: 0 },
    { id: 2, content: 'Debugging is like being the detective in a crime movie where you are also the culprit', votes: 0 },
    { id: 3, content: "Programming is the art of telling a computer what to do; it's also the art of explaining to yourself why it doesn't work", votes: 0 }
]

const anecdoteSlice = createSlice({
    name: 'anecdotes',
    initialState,
    reducers: {
        createAnecdote(state, action) {
            const content = action.payload.content;
            return state.concat({
                id: state.length + 1,
                content,
                votes: 0
            })
        },
        updateVotes(state, action) {
            const voteId = action.payload.id;
            return state.map((anecdote) => {
                return (anecdote.id === voteId ? {...anecdote, votes: anecdote.votes + 1 } : anecdote)
            })
        }
    }
})

export const { createAnecdote, updateVotes } = anecdoteSlice.actions;
export default anecdoteSlice.reducer;