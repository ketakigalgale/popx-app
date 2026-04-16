import "../LandingScreen.css";

export default function LandingScreen({ navigate }) {
  return (
    <div className="screen landing-screen">
      <div className="landing-content">
        <h1 className="landing-title">Welcome to PopX</h1>
        <p className="landing-desc">
          Lorem ipsum dolor sit amet,
          <br />
          consectetur adipiscing elit,
        </p>
        <div className="landing-buttons">
          <button className="btn-primary" onClick={() => navigate("signup")}>
            Create Account
          </button>
          <button className="btn-secondary" onClick={() => navigate("login")}>
            Already Registered? Login
          </button>
        </div>
      </div>
    </div>
  );
}
