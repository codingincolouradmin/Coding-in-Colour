import heartIcon from "../assets/images/icheart2.png";

function Note({ note, updateCount }) {
  return (
    <div className="note" style={{ backgroundColor: `var(--${note.color})` }}>
      <input
        type="image"
        className="heart-icon"
        src={heartIcon}
        alt="heart"
        onClick={(e) => updateCount(e, note.id)}
      />
      <p>{note.heartCount}</p>
      <div className="title-content">{note.title}</div>
      <div className="note-content">{note.text}</div>
      <div className="author-content">{note.author}</div>
    </div>
  );
}

export default Note;
