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
            console.log(action);
            return state;
        },
        updateVotes(state, action) {
            console.log(action);
            return state;
        }
    }
})

export const { createAnecdote, updateVotes } = anecdoteSlice.actions;
export default anecdoteSlice.reducer;