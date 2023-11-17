import Message from "./Message";

function Chat({ chat, onDeleteClick }) {
  return (
    <>
      {
        chat.map((message) => {
          return <Message key={message.id} message={message} onDeleteClick={onDeleteClick}/>
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
