import Note from "./Note";

function Notes({ notes }) {
  // notes is an array, ["Hello from France", "Hello from Canada"]
  return (
    <div className="notes">
      {/* iterated over all notes */}
      {notes.map((note) => (
        <Note noteTextContent={note.text} color={note.color} />
      ))}
    </div>
  );
}

export default Notes;
