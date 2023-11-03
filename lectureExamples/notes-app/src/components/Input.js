function Input({fieldInput, update, clickAction}) {

    return (
        <div className="noteInput">
            <h2>Add a Note</h2>
            <input value={fieldInput} 
            onChange={update}/>
            <button onClick={clickAction}>Save</button>
        </div>
    )
}

export default Input;