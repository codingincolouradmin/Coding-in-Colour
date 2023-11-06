function Input({
  text,
  handleUpdateText,
  color,
  handleUpdateColor,
  handleAddNote,
}) {
  return (
    <div className="noteInput">
      <input value={text} onChange={handleUpdateText} />
      <br />
      <select value={color} onChange={handleUpdateColor}>
        <option value="">select color</option>
        <option value="green">green</option>
        <option value="yellow">yellow</option>
        <option value="orange">orange</option>
      </select>
      <br />
      <button onClick={handleAddNote}>Save</button>
    </div>
  );
}

export default Input;
