import axios from "axios";
import { useState, useEffect } from "react";

function Topics(props) {
  const url = "https://65416188f0b8287df1fe4c19.mockapi.io/description";

  const [dataDesc, setDataDesc] = useState();
  const { onbtnclick } = props;
  const handleClick = (value) => {
    onbtnclick(value);
  };

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(url)
        .then((response) => {
          // this is executed if reposne is recieved
          setDataDesc(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="allButtons">
        <button onClick={() => handleClick(dataDesc[0].content)}>React</button>
        <button onClick={() => handleClick(dataDesc[1].content)}>JS</button>
        <br />
        <button onClick={() => handleClick(dataDesc[2].content)}>HTML</button>
        <button onClick={() => handleClick(dataDesc[3].content)}>CSS</button>
        <br />
        <button onClick={() => handleClick(dataDesc[4].content)}>Redux</button>
        <button onClick={() => handleClick(dataDesc[5].content)}>Trees</button>
      </div>
    </>
  );
}
export default Topics;
