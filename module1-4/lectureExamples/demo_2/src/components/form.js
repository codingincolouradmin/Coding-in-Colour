function Form({ message, onFormChange, onFormClick }) {
  return (
    <div className="form">
      <div className="innerDiv">
        <input value={message} onChange={onFormChange} />
        <button onClick={onFormClick}>Ask</button>
      </div>
    </div>
  );
}
export default Form;
