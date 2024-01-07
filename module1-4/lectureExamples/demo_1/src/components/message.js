function Message({ message, onDeleteClick }) {
  return (
    <div>
      { message.content }
      <button onClick={(e) => onDeleteClick(e, message.id)}>delete</button>
    </div>
  )
}

export default Message;
