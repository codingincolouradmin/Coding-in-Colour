function Pun({ pun, onDeletePun, onLikePun }) {

  const punCard = {
    margin: '0px',
    height: '200px',
    width: '150px',
    display: 'flex',
    flexDirection: 'column',
    gap: '5px',
    overflow: 'scroll',
    border: '1px solid black',
    padding: '10px'
  }

  const punButtons = {
    display:'flex',
    gap: '5px'
  }
  
  return (
    <div className="pun-display" style={punCard}>
      <span><strong>{pun.author}</strong></span>
      <span>{pun.pun}</span>
      <span>Likes: {pun.likes}</span>
      <div className="pun-buttons" style={punButtons}>
        <button onClick={(e) => onDeletePun(e, pun.id)}>Delete</button>
        <button onClick={(e) => onLikePun(e, pun.id)}>Like</button>
      </div>
    </div>
  );
}
  
export default Pun;