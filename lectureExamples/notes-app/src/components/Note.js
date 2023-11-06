import "../App.css"
function Note({noteTextContent}) {

    return (
        <div className="note">
            
            
                <li className="incard">
                    <div style={{textAlign:"right"}}><img className="imgcs" src="./icheart2.png" /></div>
                    <div>{noteTextContent}</div>
                </li>
            
        </div>
    )
}

export default Note;