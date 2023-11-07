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
        <option value="brown-sugar">brown</option>
        <option value="atomic-tangerine">tangerine</option>
        <option value="cadet-gray">grey</option>
        <option value="phlox">purple</option>
        <option value="tea-green">green</option>
      </select>
      <br />
      <button onClick={handleAddNote}>Save</button>
    </div>
  );
}

export default Input;
