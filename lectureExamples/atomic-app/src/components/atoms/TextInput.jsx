const TextInput = ({id, name, required, pattern}) => {
    return (
        required ? 
        <input id={id} name={name} required pattern={pattern}/> 
        : 
        <input id={id} name={name} pattern={pattern}/>
    )
}

export default TextInput;