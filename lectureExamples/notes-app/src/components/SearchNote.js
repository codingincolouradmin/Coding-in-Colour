import { IoIosSearch } from "react-icons/io";


function SearchNote({noteSearch, updateSearch, showSearch, handleShowSearch}) {
    return (
        <div className="search-container">
            <IoIosSearch className="add-circle1" onClick={handleShowSearch} />
            {showSearch &&
                <div className="search-fields">
                  <input value={noteSearch} onChange={updateSearch} placeholder="Search"/>
                </div>
            }
        </div>
    )
}

export default SearchNote;