import { filterChange } from '../reducers/filterActions'
import { useDispatch } from 'react-redux'

const VisibilityFilter = () => {
    const dispatch = useDispatch()

    const handleClickedButton = (e) => {
        const radioSelection = e.target.value;
        dispatch(filterChange(radioSelection));
      }
    
    return (
        <div>
        all <input type="radio" name="filter" value="ALL" onChange={handleClickedButton}/>
        important <input type="radio" name="filter" value="IMPORTANT" onChange={handleClickedButton} />
        nonimportant <input type="radio" name="filter" value="NONIMPORTANT" onChange={handleClickedButton} />
      </div>
    )
    }

export default VisibilityFilter