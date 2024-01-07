function Form({ message, onFormChange, onFormClick }) {
  return (
    <div className="form">
      <input value={message} onChange={onFormChange} />
      <button onClick={onFormClick}>Ask</button>
    </div>
  );
}
export default Form;
