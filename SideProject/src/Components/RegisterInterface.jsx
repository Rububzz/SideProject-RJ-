import { Link } from "react-router-dom";
import app from "../firebaseConfig";
import { getDatabase, ref, set, push } from "firebase/database";
import { useState } from "react";

function RegisterInterface() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handleUsernameChange(event) {
    setUsername(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  const saveData = async () => {
    const db = getDatabase(app);
    const newDocRef = push(ref(db, "UserData"));
    set(newDocRef, {
      Email: email,
      Username: username,
      Password: password,
    })
      .then(() => {
        alert("Account created Successfully");
      })
      .catch((error) => alert("error: ", error.message));
  };

  return (
    <div>
      <form>
        <label>Email:</label>
        <input
          type="text"
          placeholder="Enter your Email"
          value={email}
          onChange={handleEmailChange}
        />
        <label>Username:</label>
        <input
          type="text"
          placeholder="Enter a Username"
          value={username}
          onChange={handleUsernameChange}
        />
        <label>Password:</label>
        <input
          type="text"
          placeholder="Enter a Password"
          value={password}
          onChange={handlePasswordChange}
        />
      </form>
      <Link to="Home">
        <button>Create account</button>
      </Link>
    </div>
  );
}

export default RegisterInterface;
