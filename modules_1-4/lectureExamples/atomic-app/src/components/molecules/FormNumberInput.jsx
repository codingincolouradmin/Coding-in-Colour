import Label from "../atoms/Label";
import NumberInput from "../atoms/NumberInput";

const FormNumberInput = ({id, name, textContent, required, min, max}) => {
    return (
        <div>
            <Label htmlFor={id} textContent={textContent}/>
            <NumberInput id={id} name={name} required={required} min={min} max={max}/>
        </div>
    )
}

export default FormNumberInput;