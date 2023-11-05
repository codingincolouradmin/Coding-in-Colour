function Input({text, handleUpdateText, handleAddNote}) {

    return (
        <div className="noteInput">
            <h2>Add a Note</h2>
            <input value={text} 
            onChange={handleUpdateText}/>
            <button onClick={handleAddNote}>Save</button>
        </div>
    )
}

export default Input;