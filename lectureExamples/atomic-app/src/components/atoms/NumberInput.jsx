const NumberInput = ({id, name, required, min, max}) => {
    return (
        required ? 
        <input id={id} name={name} type="number" required min={min} max={max}/> 
        : 
        <input id={id} name={name} type="number" min={min} max={max}/>
    )
}

export default NumberInput;