import LoginPage from "./Pages/LoginPage";
import HomePage from "./Pages/HomePage";
import RegisterPage from "./Pages/RegisterPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginPage />}></Route>
        <Route path="Register" element={<RegisterPage />}></Route>
        <Route path="Home" element={<HomePage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
