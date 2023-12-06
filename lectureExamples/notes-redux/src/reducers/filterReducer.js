const filterReducer = (state = 'ALL', action) => {
    console.log(action);
    switch (action.type) {
        case 'SET_FILTER':
            return action.payload
        default:
            return state;
    }
}

export default filterReducer;