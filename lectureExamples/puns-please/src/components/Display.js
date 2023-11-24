import Pun from "./Pun";

function Display({ puns, onDeletePun, onLikePun }) {
    return (
      <div className="puns-display">
        {puns.map((pun) => {
          return <Pun pun={pun} onDeletePun={onDeletePun} onLikePun={onLikePun}/>
        })}
      </div>
    );
  }
  
export default Display;