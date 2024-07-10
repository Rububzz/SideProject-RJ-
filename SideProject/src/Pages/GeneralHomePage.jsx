import Navigationbar from "../Components/Navigationbar";
import { Link } from "react-router-dom";

function GeneralHomePage() {
  return (
    <div className="items-center">
      <h1 className="text-center">HomePage</h1>
      <Link to="Login">
        <button>Login</button>
      </Link>
      <Navigationbar />
    </div>
  );
}

export default GeneralHomePage;
