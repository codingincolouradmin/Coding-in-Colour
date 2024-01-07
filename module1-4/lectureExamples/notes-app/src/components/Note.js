import heartIcon from "../assets/images/icheart2.png";
import deleteIcon from "../assets/images/cross.png"

function Note({ note, updateCount, deleteNote }) {
  console.log(deleteNote);
  console.log(updateCount);
  return (
    <div className="note" style={{ backgroundColor: `var(--${note.color})` }}>
      <div className="card-header">
        <input
          type="image"
          className="heart-icon"
          src={heartIcon}
          alt="heart"
          onClick={(e) => updateCount(e, note.id)}
        />
        <input
          type="image"
          className="delete-icon"
          src={deleteIcon}
          alt="Cross"
          onClick={(e) => deleteNote(e, note.id)}
        />
      </div>
      <p>{note.heartCount}</p>
      <div className="title-content">{note.title}</div>
      <div className="note-content">{note.content}</div>
      <div className="author-content">{note.author}</div>
    </div>
  );
}

export default Note;
