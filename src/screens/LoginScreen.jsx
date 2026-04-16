import { useState } from "react";
import "../LoginScreen.css";

export default function LoginScreen({ navigate }) {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = () => {
    navigate("profile", {
      name: "Marry Doe",
      email: form.email || "marry@gmail.com",
    });
  };

  return (
    <div className="screen login-screen">
      <h1 className="login-title">
        Signin to your
        <br />
        PopX account
      </h1>
      <p className="login-desc">
        Lorem ipsum dolor sit amet,
        <br />
        consectetur adipiscing elit,
      </p>

      <div className="input-group">
        <label>Email Address</label>
        <input
          type="email"
          name="email"
          placeholder="Enter email address"
          value={form.email}
          onChange={handleChange}
        />
      </div>

      <div className="input-group">
        <label>Password</label>
        <input
          type="password"
          name="password"
          placeholder="Enter password"
          value={form.password}
          onChange={handleChange}
        />
      </div>

      <button className="btn-primary login-btn" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
}
