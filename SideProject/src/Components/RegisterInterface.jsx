import { Link } from "react-router-dom";

function RegisterInterface() {
  return (
    <div>
      <form>
        <label>Email:</label>
        <input type="text" placeholder="Enter your Email" />
        <label>Username:</label>
        <input type="text" placeholder="Enter a Username" />
        <label>Password:</label>
        <input type="text" placeholder="Enter a Password" />
      </form>
      <Link to="/PersonalHome">
        <button>Create account</button>
      </Link>
    </div>
  );
}

export default RegisterInterface;
