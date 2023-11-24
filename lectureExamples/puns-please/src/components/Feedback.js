function Feedback({feedback, onFeedbackChange, onFeedbackClick }) {

    const feedbackStyle = {
        display: 'flex',
        flexDirection: 'column',
    }

    return (
        <div className="feedback" style={feedbackStyle}>
            <h3>Send us your thoughts</h3>
            <span>Name 
                <input name="name" value={feedback.name} onChange={onFeedbackChange} />
            </span>
            <span>Message 
                <textarea name="message" value={feedback.message } onChange={onFeedbackChange}/>
            </span>
            <button onClick={onFeedbackClick}>Send</button>
        </div>
    )
}

export default Feedback;