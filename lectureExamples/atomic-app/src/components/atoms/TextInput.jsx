const TextInput = ({id, name, required, pattern, errorMsg}) => {
    return (
        required ? 
        <input id={id} name={name} required pattern={pattern} title={errorMsg}/> 
        : 
        <input id={id} name={name} pattern={pattern} title={errorMsg}/>
    )
}

export default TextInput;