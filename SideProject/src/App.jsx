import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
import GeneralHomePage from "./Pages/GeneralHomePage";
import { Routes, Route } from "react-router-dom";
import PersonalHomePage from "./Pages/PersonalHomePage";
import ChatPage from "./Pages/ChatPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<GeneralHomePage />}></Route>
        <Route path="Register" element={<RegisterPage />}></Route>
        <Route path="PersonalHome" element={<PersonalHomePage />}></Route>
        <Route path="Chat" element={<ChatPage></ChatPage>}></Route>
        <Route path="Login" element={<LoginPage></LoginPage>}></Route>
      </Routes>
    </div>
  );
}

export default App;
