import { useState } from "react";
import LandingScreen from "./screens/LandingScreen";
import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";
import ProfileScreen from "./screens/ProfileScreen";
import "./App.css";

export default function App() {
  const [screen, setScreen] = useState("landing");
  const [userData, setUserData] = useState(null);

  const navigate = (to, data = null) => {
    if (data) setUserData(data);
    setScreen(to);
  };

  return (
    <div className="app-wrapper">
      <div className="phone-frame">
        {screen === "landing" && <LandingScreen navigate={navigate} />}
        {screen === "login" && <LoginScreen navigate={navigate} />}
        {screen === "signup" && <SignupScreen navigate={navigate} />}
        {screen === "profile" && (
          <ProfileScreen navigate={navigate} userData={userData} />
        )}
      </div>
    </div>
  );
}
