import { useEffect, useState } from "react";
import "./creator.css"; // Import CSS for styling if needed
import { getUserByUserId } from "../services/userService";

export const CreatorProfile = ({ currentUser }) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    getUserByUserId(currentUser.id).then(setUser);
  }, [currentUser]);
  return (
    <div className="profile-container">
      <h2>Profile Information</h2>
      <div className="profile-details">
        <p>
          <strong>Username:</strong> {user.userName}
        </p>
        <p>
          <strong>First Name:</strong> {user.firstName}
        </p>
        <p>
          <strong>Last Name:</strong> {user.lastName}
        </p>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
      </div>
    </div>
  );
};
