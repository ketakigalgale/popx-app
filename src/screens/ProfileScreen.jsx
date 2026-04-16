import { useState } from "react";
import "../ProfileScreen.css";

export default function ProfileScreen({ navigate, userData }) {
  const name = userData?.name || "Marry Doe";
  const email = userData?.email || "Marry@Gmail.Com";
  const [imgError, setImgError] = useState(false);

  return (
    <div className="screen profile-screen">
      <h2 className="profile-heading">Account Settings</h2>

      <div className="profile-card">
        <div className="avatar-wrapper">
          {!imgError ? (
            <img
              src="https://i.pravatar.cc/150?img=47"
              alt="Profile"
              className="avatar-img"
              onError={() => setImgError(true)}
            />
          ) : (
            <div className="avatar-fallback">{name.charAt(0)}</div>
          )}
          <div className="avatar-badge">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="white">
              <path d="M12 2a4 4 0 014 4 4 4 0 01-4 4 4 4 0 01-4-4 4 4 0 014-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4z" />
            </svg>
          </div>
        </div>

        <div className="profile-info">
          <h3 className="profile-name">{name}</h3>
          <p className="profile-email">{email}</p>
        </div>
      </div>

      <p className="profile-bio">
        Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy
        Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
      </p>
    </div>
  );
}
