function Input({text, handleUpdateText, handleAddNote}) {

    return (
        <div className="noteInput">
            
            <input value={text} 
            onChange={handleUpdateText}/>
            <button onClick={handleAddNote}>Save</button>
        </div>
    )
}

export default Input;