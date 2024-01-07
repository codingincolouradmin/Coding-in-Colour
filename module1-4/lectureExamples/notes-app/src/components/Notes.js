import Note from "./Note";

function Notes({ notes, updateCount, search, sorted, deleteNote }) {
  const searchFilter = (search, note) => {
    const searchModified = search.toLowerCase().trim();
    if (searchModified == "") {
      return true;
    } else {
      return note.content.includes(searchModified);
    }
  }

  // console.log(deleteNote);
  // console.log(updateCount);
  return (
    
    <div className="notes">
      {sorted ? 
        notes.filter((note) => searchFilter(search, note))
        .sort((a, b) => b.heartCount - a.heartCount)
        .map((note) => (
          <Note note={note} updateCount={updateCount} deleteNote={deleteNote}/>
        ))
        :
        notes.filter((note) => searchFilter(search, note)).map((note) => (
          <Note note={note} updateCount={updateCount} deleteNote={deleteNote} />
        )) 
      }
    </div>
  ); // sorted? console.log(a):consoleb
}
export default Notes;
