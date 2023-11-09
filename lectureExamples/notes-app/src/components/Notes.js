import Note from "./Note";

function Notes({ notes, updateCount, search, sorted }) {
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
      {sorted ? 
        notes.filter((note) => searchFilter(search, note))
        .sort((a, b) => b.heartCount - a.heartCount)
        .map((note) => (
          <Note note={note} updateCount={updateCount} />
        ))
        :
        notes.filter((note) => searchFilter(search, note)).map((note) => (
          <Note note={note} updateCount={updateCount} />
        )) 
      }
    </div>
  );
}
export default Notes;
