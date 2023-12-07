const AnecdoteForm = ({onFormSubmit}) => {
    return (
        <form onSubmit={onFormSubmit}>
            <input name="content"/>
            <button type="submit">submit</button>
        </form>
    )
}

export default AnecdoteForm