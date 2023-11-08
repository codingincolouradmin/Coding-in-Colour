function Input({
  text,
  handleUpdateText,
  color,
  title,
  author,
  handleUpdateAuthor,
  handleUpdateTitle,
  handleUpdateColor,
  handleAddNote,
}) {
  return (
    <div className="noteInput">
      <input value={title} onChange={handleUpdateTitle} placeholder="Title"/>
      <br />
      <input value={text} onChange={handleUpdateText} placeholder="Note"/>
      <br />
      <input value={author} onChange={handleUpdateAuthor} placeholder="Author" />
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
