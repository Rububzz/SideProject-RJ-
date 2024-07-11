import LoginPage from "./Pages/LoginPage";
import GeneralHomePage from "./Pages/GeneralHomePage";
import RegisterPage from "./Pages/RegisterPage";
import PersonalHomePage from "./Pages/PersonalHomePage";
import { Routes, Route } from "react-router-dom";
import ChatPage from "./Pages/ChatPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<GeneralHomePage />}></Route>
        <Route path="Register" element={<RegisterPage />}></Route>
        <Route path="Login" element={<LoginPage />}></Route>
        <Route path="PersonalHome" element={<PersonalHomePage />}></Route>
        <Route path="Chat" element={<ChatPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
