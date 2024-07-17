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

  const showData = (e) => console.log(e);

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
      <Link to="/PersonalHome">
        <button onClick={(e) => showData(e)}>Create account</button>
      </Link>
    </div>
  );
}

export default RegisterInterface;
