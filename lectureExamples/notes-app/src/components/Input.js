function Input({fieldInput, update}) {

    return (
        <div className="noteInput">
            <h2>Add a Note</h2>
            <input value={fieldInput} 
            onChange={update}/>
            <button>Save</button>
        </div>
    )
}

export default Input;