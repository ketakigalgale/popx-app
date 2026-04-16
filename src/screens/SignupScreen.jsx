import { useState } from "react";
import "../SignupScreen.css";

export default function SignupScreen({ navigate }) {
  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    isAgency: "yes",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    navigate("profile", {
      name: form.fullName || "Marry Doe",
      email: form.email || "marry@gmail.com",
    });
  };

  return (
    <div className="screen signup-screen">
      <h1 className="signup-title">
        Create your
        <br />
        PopX account
      </h1>

      <div className="input-group">
        <label>
          Full Name<span className="required">*</span>
        </label>
        <input
          type="text"
          name="fullName"
          placeholder="Marry Doe"
          value={form.fullName}
          onChange={handleChange}
        />
      </div>

      <div className="input-group">
        <label>
          Phone number<span className="required">*</span>
        </label>
        <input
          type="tel"
          name="phone"
          placeholder="Marry Doe"
          value={form.phone}
          onChange={handleChange}
        />
      </div>

      <div className="input-group">
        <label>
          Email address<span className="required">*</span>
        </label>
        <input
          type="email"
          name="email"
          placeholder="Marry Doe"
          value={form.email}
          onChange={handleChange}
        />
      </div>

      <div className="input-group">
        <label>
          Password<span className="required">*</span>
        </label>
        <input
          type="password"
          name="password"
          placeholder="Marry Doe"
          value={form.password}
          onChange={handleChange}
        />
      </div>

      <div className="input-group">
        <label>Company name</label>
        <input
          type="text"
          name="company"
          placeholder="Marry Doe"
          value={form.company}
          onChange={handleChange}
        />
      </div>

      <div className="agency-group">
        <label className="agency-label">
          Are you an Agency?<span className="required">*</span>
        </label>
        <div className="radio-group">
          <label className="radio-option">
            <input
              type="radio"
              name="isAgency"
              value="yes"
              checked={form.isAgency === "yes"}
              onChange={handleChange}
            />
            <span className="radio-circle"></span>
            Yes
          </label>
          <label className="radio-option">
            <input
              type="radio"
              name="isAgency"
              value="no"
              checked={form.isAgency === "no"}
              onChange={handleChange}
            />
            <span className="radio-circle"></span>
            No
          </label>
        </div>
      </div>

      <button className="btn-primary create-btn" onClick={handleSubmit}>
        Create Account
      </button>
    </div>
  );
}
