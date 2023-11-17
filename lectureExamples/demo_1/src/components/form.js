function Form({ message, onFormChange, onFormClick }) {
  return (
    <>
      <input value={message} onChange={onFormChange} />
      <button onClick={onFormClick}>Ask</button>
    </>
  );
}
export default Form;
