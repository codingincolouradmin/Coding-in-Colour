const Label = ({htmlFor, textContent}) => {
    return (
        <label htmlFor={htmlFor}>
            {textContent}
        </label>
    )
}

export default Label;