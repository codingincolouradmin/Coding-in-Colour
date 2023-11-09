import { useState } from "react";

function UserProfile() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState(null);

  const handleLogin = () => {
    setLoggedIn(true);
    setUserInfo({ email: "test@text.com", password: "123456789" });
  };

  const handleLogOut = () => {
    setLoggedIn(false);
    setUserInfo(null);
  };

  return (
    <>
      {isLoggedIn ? (
        <div>
          <p>{userInfo.email}</p>
          <button onClick={handleLogOut}>Logout</button>
        </div>
      ) : (
        <button onClick={handleLogin}>Login</button>
      )}
    </>
  );
}

export default UserProfile;
