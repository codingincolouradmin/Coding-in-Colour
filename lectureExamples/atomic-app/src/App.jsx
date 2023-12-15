import Button from "./components/atoms/Button";
import Label from "./components/atoms/Label";
import TextInput from "./components/atoms/TextInput";
import NumberInput from "./components/atoms/NumberInput";

function App() {
  const onFormSubmit = (e) => {
    e.preventDefault();
    console.log('You clicked submit');
  }

  return (
    <div>
      <h1>Form</h1>
      <form onSubmit={onFormSubmit}>
        <Label htmlFor="name" textContent={"Name :"}/>
        <TextInput id={"name"} name={"name"} required={true} pattern={"[A-Za-z ]+"}/>
        <Label htmlFor="age" textContent={"Age :"}/>
        <NumberInput id={"age"} name={"age"} min={1} max={100}/>
        <Label htmlFor="location" textContent={"Location :"}/>
        <TextInput id={"location"} name={"location"} required={true} pattern={"[A-Za-z0-9 ]+"}/>
        <Button type={"submit"} label={"Submit"} onButtonClick={null}/>
      </form>
    </div>
  )
}

export default App
