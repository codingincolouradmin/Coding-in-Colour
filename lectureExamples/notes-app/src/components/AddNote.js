import { IoIosAdd } from "react-icons/io";

function AddNote({
    noteTitle, noteContent, noteAuthor, noteColor,
    updateTitle, updateContent, updateAuthor, updateColor,
    addNote,
    showAdd, handleShowAdd
}) {

    return (
        <div className="add-container">
            <IoIosAdd className="add-circle" onClick={handleShowAdd} />
            {showAdd &&
                <div className="add-fields">
                  <input value={noteTitle} onChange={updateTitle} placeholder="Title"/>
                  <br />
                  <input value={noteContent} onChange={updateContent} placeholder="Note"/>
                  <br />
                  <input value={noteAuthor} onChange={updateAuthor} placeholder="Author" />
                  <br />
                  <select value={noteColor} onChange={updateColor}>
                      <option value="">select color</option>
                      <option value="brown-sugar">brown</option>
                      <option value="atomic-tangerine">tangerine</option>
                      <option value="cadet-gray">grey</option>
                      <option value="phlox">purple</option>
                      <option value="tea-green">green</option>
                  </select>
                  <br />
                  <button onClick={addNote}>Save</button>
                </div>
            }
        </div>
    )
}
export default AddNote;