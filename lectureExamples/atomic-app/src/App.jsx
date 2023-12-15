import Button from "./components/atoms/Button";
import FormTextInput from "./components/molecules/FormTextInput";
import FormNumberInput from "./components/molecules/FormNumberInput";
import BasicForm from "./components/organisms/BasicForm";

function App() {
  const onFormSubmit = (e) => {
    e.preventDefault();
    console.log('You clicked submit');
  }

  return (
    <BasicForm formSubmitHandler={onFormSubmit}>
      <FormTextInput id={"name"} name={"name"} textContent={"Name: "} required={true} pattern={"[A-Za-z ]+"} errorMsg={"wrong input!"}/>
      <FormNumberInput id={"age"} name={"age"} textContent={"Age: "}required={true} min={1} max={100}/>
      <FormTextInput id={"location"} name={"location"} textContent={"Location :"} required={true} pattern={"[A-Za-z0-9 ]+"}/>
      <Button type={"submit"} label={"Submit"} onButtonClick={null}/>
    </BasicForm>
  )
}

export default App
