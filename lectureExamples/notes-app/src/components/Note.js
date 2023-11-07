import heartIcon from '../assets/images/icheart2.png';

function Note({ noteTextContent, color }) {
  return (
    <div className="note" style={{ backgroundColor: `var(--${color})`}}>
      <img className="heart-icon" src={heartIcon} alt="heart" />
      <div className="note-content">{noteTextContent}</div>
    </div>
  );
}

export default Note;
