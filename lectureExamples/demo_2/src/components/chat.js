import Message from "./message";

function Chat({ chat }) {
  return (
    <div className="chats">
      {
        chat.map((message) => {
          const col = message.role === 'assistant'? '#F5DEB3':'pink';
          return <Message message={message} col={col}/>
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
