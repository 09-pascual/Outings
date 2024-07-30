import { Link, useNavigate } from "react-router-dom";
import "./nav.css";

export const CreatorNavBar = () => {
  const navigate = useNavigate();

  return (
    <ul className="navbar">
      <li className="navbar-item">
        <Link to="/homepage">Homepage</Link>
      </li>
      <li className="navbar-item">
        <Link to="/createOuting">Create Outing</Link>
      </li>
      <li className="navbar-item">
        <Link to="/profile">Profile</Link>
      </li>
      {localStorage.getItem("Outings_user") ? (
        <li className="navbar-item navbar-logout">
          <Link
            className="navbar-link"
            to="/"
            onClick={() => {
              localStorage.removeItem("Outings_user");
              navigate("/", { replace: true });
            }}
          >
            Logout
          </Link>
        </li>
      ) : null}
    </ul>
  );
};
