const Button = ({type, label, onButtonClick}) => {
    return (
        <button type={type} onClick={onButtonClick}>
            {label}
        </button>
    )
}

export default Button;