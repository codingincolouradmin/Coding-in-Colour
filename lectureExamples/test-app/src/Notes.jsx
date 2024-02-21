import Note from "./Note";

const Notes = ({ notes, toggleImportance }) => {
  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map((note, index) => (
          <Note note={note} index={index} toggleImportance={toggleImportance} />
        ))}
      </ul>
    </div>
  );
};

export default Notes;
