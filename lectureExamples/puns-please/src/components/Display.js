import Pun from "./Pun";

function Display({ puns, onDeletePun, onLikePun }) {

  const display = {
    display: 'flex',
    flexWrap: 'wrap',
    padding: '20px',
    gap: '20px',
  }

  return (
    <div className="puns-display" style={display}>
      {puns.map((pun) => {
        return <Pun key={pun.id} pun={pun} onDeletePun={onDeletePun} onLikePun={onLikePun}/>
      })}
    </div>
  );
}
  
export default Display;