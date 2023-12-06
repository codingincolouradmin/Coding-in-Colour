const filterChange = (filter) => {
    return {
        type: 'SET_FILTER',
        payload: filter
    }
}

export { filterChange };