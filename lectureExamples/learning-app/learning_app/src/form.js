function Form({ textInputValue, triggerAskButton, triggerInputChange }) {
  return (
    <>
      <input value={textInputValue} onChange={triggerInputChange} />
      <button onClick={triggerAskButton}>Ask</button>
    </>
  );
}
export default Form;
