import Topics from "./Topics";
import Info from "./Info";
import { useState } from "react";

function Course() {
  console.log('I am rendering');

  const[desc,setDesc]=useState("");
  
  // const getDescription = (value) => {
  //   setDesc(value);
  // }

  const updateDescription = (newDescription) => {
    setDesc(newDescription);
  }



  return (
    
      <>
      <div className="courseContainer">
        <div className="topics">
          <Topics onTopicClick={updateDescription} /></div>
        <div className="explain">
          <Info description={desc} />
        </div>
      </div>
      
      </>
    
  );
}

export default Course;
