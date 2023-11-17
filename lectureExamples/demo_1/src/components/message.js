function Message({ message, onDeleteClick }) {
  return (
    <>
      <p>{ message.content }</p>
      <button onClick={(e) => onDeleteClick(e, message.id)}>delete</button>
    </>
  )
}

export default Message;
