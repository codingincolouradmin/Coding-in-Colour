const NumberInput = ({id, name, required, min, max}) => {
    return (
        required ? 
        <input id={id} name={name} required min={min} max={max}/> 
        : 
        <input id={id} name={name} min={min} max={max}/>
    )
}

export default NumberInput;