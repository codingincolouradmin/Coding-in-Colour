import Note from "./Note";

function Notes({ notes, updateCount, search }) {
  console.log('our search is ', search);
  // notes is an array, ["Hello from France", "Hello from Canada"]
  const searchFilter = (search, note) => {
    const searchModified = search.toLowerCase().trim();
    if (searchModified == "") {
      return true;
    } else {
      return note.content.includes(searchModified);
    }
  }

  return (
    <div className="notes">
      {/* iterated over all notes */}
      {notes.filter((note) => searchFilter(search, note)).map((note) => (
        <Note note={note} updateCount={updateCount} />
      ))}
    </div>
  );
}
export default Notes;
