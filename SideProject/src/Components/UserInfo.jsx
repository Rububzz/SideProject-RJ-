import { Link } from "react-router-dom";

function UserInfo() {
  return (
    <>
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <form>
          <label className="block text-sm font-medium text-gray-700">
            Username:
          </label>
          <input
            type="text"
            className="mt-1 p-2 border border-gray-300 rounded w-full"
            placeholder="Enter your username"
          />
          <label className="block text-sm font-medium text-gray-700">
            Password:
          </label>
          <input
            type="text"
            className="mt-1 p-2 border border-gray-300 rounded w-full"
            placeholder="Enter your password"
          />
        </form>
        <nav>
          <Link to="/PersonalHome">
            <button className="bg-blue-500 text-white p-2 rounded shadow hover:bg-blue-700">
              Login
            </button>
          </Link>
        </nav>
      </div>
      <div className="mt-4 text-center">
        <p>No Account?</p>
        <nav>
          <Link to="/Register">
            <button className="mt-2 bg-green-500 text-white p-2 rounded shadow hover:bg-green-700">
              Create Account
            </button>
          </Link>
        </nav>
      </div>
    </>
  );
}

export default UserInfo;
