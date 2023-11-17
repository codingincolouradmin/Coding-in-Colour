import Message from "./message";

function Chat({ chat, onDeleteClick }) {
  return (
    <div className="chats">
      {
        chat.map((message) => {
          return <Message key={message.id} message={message} onDeleteClick={onDeleteClick}/>
        })
      }
    </div>
  );
}
export default Chat;

/**
 * ["a", "b"]
 * 
 * [<p>"a"</p>, <p>"b"</p>]
 */
