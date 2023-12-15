import Label from "../atoms/Label";
import TextInput from "../atoms/TextInput";

const FormTextInput = ({id, name, textContent, required, pattern}) => {
    return (
        <div>
            <Label htmlFor={id} textContent={textContent}/>
            <TextInput id={id} name={name} required={required} pattern={pattern}/>
        </div>
    )
}

export default FormTextInput;