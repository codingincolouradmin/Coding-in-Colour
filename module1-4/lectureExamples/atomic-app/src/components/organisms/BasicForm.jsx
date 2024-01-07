const BasicForm = ({formSubmitHandler, children}) => {
    return (
        <form onSubmit={formSubmitHandler}>
            {children}
        </form>
    )
}

export default BasicForm;