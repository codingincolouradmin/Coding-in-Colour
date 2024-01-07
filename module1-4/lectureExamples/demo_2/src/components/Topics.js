// function TopicButton(props) {
//   return (
//     <>
//       <button>{props.name}</button>
//     </>
//   );
// }

function Topics({onTopicClick}) {
  const description = [
    "Amazing tool for Web Dev",
    "Great language to integrate with html",
    "Tag based language",
    "Great for designing",
    "Great for managing states of complex applications",
    "Great for visualisation"
  ]

  // const {onbtnclick}=props;

  const handleClick = (value) => {
    onTopicClick(value);
  }

  return (
    <>
      <div className="allButtons">
        <button onClick={()=> handleClick(description[0])}>React</button>
        <button onClick={()=> handleClick(description[1])}>JS</button>
        <br />
        <button onClick={() => handleClick(description[2])}>HTML</button>
        <button onClick={()=> handleClick(description[3])}>CSS</button>
        <br />
        <button onClick={()=> handleClick(description[4])}>Redux</button>
        <button onClick={()=> handleClick(description[5])}>Trees</button>
      </div>
    </>
  );
}
export default Topics;
