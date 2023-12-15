import Label from "../atoms/Label";
import TextInput from "../atoms/TextInput";

const FormTextInput = ({id, name, textContent, required, pattern, errorMsg}) => {
    return (
        <div>
            <Label htmlFor={id} textContent={textContent}/>
            <TextInput id={id} name={name} required={required} pattern={pattern} errorMsg={errorMsg}/>
        </div>
    )
}

export default FormTextInput;