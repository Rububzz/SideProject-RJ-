import { Link } from "react-router-dom";
import NavigationBar from "../Components/Navigationbar";

function GeneralHomePage() {
  return (
    <div className="items-center">
      <h1 className="text-center">HomePage</h1>
      <Link to="Login">
        <button>Login</button>
      </Link>
      <NavigationBar></NavigationBar>
    </div>
  );
}

export default GeneralHomePage;
