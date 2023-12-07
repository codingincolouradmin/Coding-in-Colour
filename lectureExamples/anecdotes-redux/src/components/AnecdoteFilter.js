const AnecdoteFilter = ({filter, onFilterChange}) => {
    return (
        <div>
            filter <input value={filter} onChange={onFilterChange}/>
        </div>
    )
}

export default AnecdoteFilter;