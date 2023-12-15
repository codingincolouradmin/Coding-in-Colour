import Button from "./components/atoms/Button";
import Label from "./components/atoms/Label";
import TextInput from "./components/atoms/TextInput";

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
        <label htmlFor="age">Age: </label><input id="age" name="age" type="number" min="1" max="100" />
        <label htmlFor="location">Location: </label><input id="location" name="location" required pattern="[A-Za-z0-9 ]+" />
        <Button type={"submit"} label={"Submit"} onButtonClick={null}/>
      </form>
    </div>
  )
}

export default App
