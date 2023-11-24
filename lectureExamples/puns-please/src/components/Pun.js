function Pun({ pun, onDeletePun, onLikePun }) {
    return (
      <div className="pun-display">
        <span>{pun.author}</span>
        <span>{pun.pun}</span>
        <span>Likes: {pun.likes}</span>
        <button onClick={onDeletePun}>Delete</button>
        <button onClick={onLikePun}>Like</button>
      </div>
    );
  }
  
export default Pun;