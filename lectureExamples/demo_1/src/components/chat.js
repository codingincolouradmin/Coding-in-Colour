import Message from "./Message";

function Chat({ chat }) {
  return (
    <>
      {
        chat.map((element) => {
          return <Message content={element}/>
        })
      }
    </>
  );
}
export default Chat;

/**
 * ["a", "b"]
 * 
 * [<p>"a"</p>, <p>"b"</p>]
 */
