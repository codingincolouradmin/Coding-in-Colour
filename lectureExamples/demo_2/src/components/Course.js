import Topics from "./Topics";
import Info from "./Info";
import { useState } from "react";

function Course() {

  const[desc,setDesc]=useState("");
  const getDescription = (value) => {
    setDesc(value);
  }



  return (
    
      <>
      <div className="courseContainer">
        <div className="topics"><Topics onbtnclick = {getDescription} /></div>
        <div className="explain">
          <Info description={desc} />
        </div>
      </div>
      
      </>
    
  );
}

export default Course;
