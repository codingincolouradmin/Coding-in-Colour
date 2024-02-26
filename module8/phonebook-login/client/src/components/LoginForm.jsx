const LoginForm = ({ onLogin, onCreate, onLogout, user }) => {
  // Handler function for clicking 'login' or 'create'
  const handleSubmit = (e) => {
    e.preventDefault()
    // Grab relevant values
    const user = {
      username: e.target.username.value,
      password: e.target.password.value
    }
    // distinguish between which button is clicked, 'login' or 'create'?
    const clickType = e.nativeEvent.submitter.value
    console.log('click type: ', clickType)
    if (clickType === 'login') {
      onLogin(user)
    } else {
      onCreate(user)
    }
  }

  return (
    <div>
      { user
      ? <div className="username-header">
          <p><strong>{user.username}</strong> is logged in</p>
          <button onClick={onLogout}>logout</button>
        </div>
      : <form onSubmit={handleSubmit}>
          <div><input placeholder="username" name="username"/></div>
          <div><input placeholder="password" name="password" type="password"/></div>
          <div>
            <button type="submit" value="login">login</button>
            <button type="submit" value="create">create</button>
          </div>
        </form>
      }
    </div>
  )
}


export default LoginForm