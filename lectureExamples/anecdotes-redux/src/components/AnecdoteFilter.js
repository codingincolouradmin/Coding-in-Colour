import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../reducers/filterReducer';

const AnecdoteFilter = () => {
    const dispatch = useDispatch();
    const filter = useSelector(state => { return state.filter })

    const handleFilterChange = (e) => {
        e.preventDefault();
        const typedVal = e.target.value;
        dispatch(changeFilter({
            filter: typedVal
        }))
    }

    return (
        <div>
            filter <input value={filter} onChange={handleFilterChange}/>
        </div>
    )
}

export default AnecdoteFilter;