import Note from "./Note";

function Notes({ notes, updateCount }) {
  // notes is an array, ["Hello from France", "Hello from Canada"]
  return (
    <div className="notes">
      {/* iterated over all notes */}
      {notes.map((note) => (
        <Note note={note} updateCount={updateCount} />
      ))}
    </div>
  );
}

export default Notes;
