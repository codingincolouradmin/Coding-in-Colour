import "../App.css";
function Note({ noteTextContent, color }) {
  return (
    <div className="note">
      <li className="incard" style={{ backgroundColor: color }}>
        <div style={{ textAlign: "right" }}>
          <img className="imgcs" src="./icheart2.png" alt="heart" />
        </div>
        <div>{noteTextContent}</div>
      </li>
    </div>
  );
}

export default Note;
