import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Loginpage } from "./pages/LoginPage/loginpage";
import Register from "./pages/RegisterPage/register";
import Main from "./pages/MainPage/main";
import Forgot from "./pages/FogotPassPage/forgot";
import BasicModal from "./pages/Modal/basicmodal.js";
import LandingPage from "./Component/landingPage.js";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Loginpage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/main" element={<Main />} />
          {/* forgot pass */}
          <Route path="/forgotpass" element={<Forgot />} />
          {/* reset pass first time */}
          <Route path="/basicmodalpage" element={<BasicModal />} />

          {/* LANDING PAGE FOR SAMPLE */}
          <Route path="/page" element={<LandingPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
