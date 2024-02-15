const ContactForm = ({ onAdd }) => {
  return (
    <div>
      <h2>add a contact</h2>
      <form onSubmit={onAdd}>
        <div>
          <div><input placeholder="name" name="name"/></div>
          <div><input placeholder="number" name="number"/></div>
          <button>add</button>
        </div>
      </form>
    </div>
  )
}

export default ContactForm