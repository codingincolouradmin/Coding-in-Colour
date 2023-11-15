function Form({ message, onMessageChange, onAskClick }) {
  return (
    <>
      <input value={message} onChange={onMessageChange} />
      <button onClick={onAskClick}>Ask</button>
    </>
  );
}
export default Form;
