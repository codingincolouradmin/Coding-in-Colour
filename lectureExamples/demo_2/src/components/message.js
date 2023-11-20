function Message({ message, col }) {
  var left;
  var right;
  var align;
  if(col==="pink"){
    left=100;
    right=0;
    align="right";
  }
  else
  {
    left=0;
    right=100;
    align="left";

  }
  return (
    <div style={{backgroundColor:col,minHeight:30,borderRadius:50,marginLeft:left,marginRight:right,textAlign:align,color:"white"}}>
      <p style={{padding:30}}>{ message.content }</p>
      
    </div>
  )
}

export default Message;
