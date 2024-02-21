const Note = ({ note, index, toggleImportance }) => {
  const label = note.important ? "make not important" : "make important";

  return (
    
    <li className="note"  key={index}>
      {note.content}
      <button onClick={() => toggleImportance(index)}>{label}</button>
    </li>
  );
};

export default Note;
