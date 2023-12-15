import Button from "./components/atoms/Button";
import Label from "./components/atoms/Label";
import TextInput from "./components/atoms/TextInput";
import NumberInput from "./components/atoms/NumberInput";
import FormTextInput from "./components/molecules/FormTextInput";
import FormNumberInput from "./components/molecules/FormNumberInput";

function App() {
  const onFormSubmit = (e) => {
    e.preventDefault();
    console.log('You clicked submit');
  }

  return (
    <div>
      <h1>Form</h1>
      <form onSubmit={onFormSubmit}>
        <FormTextInput id={"name"} name={"name"} textContent={"Name: "} required={true} pattern={"[A-Za-z ]+"}/>
        <FormNumberInput id={"age"} name={"age"} textContent={"Age: "}required={true} min={1} max={100}/>
        <Label htmlFor="location" textContent={"Location :"}/>
        <TextInput id={"location"} name={"location"} required={true} pattern={"[A-Za-z0-9 ]+"}/>
        <Button type={"submit"} label={"Submit"} onButtonClick={null}/>
      </form>
    </div>
  )
}

export default App
