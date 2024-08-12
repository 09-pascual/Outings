import "./welcome.css";

export const Welcome = () => {
  return (
    <div className="welcome-container">
      <img
        className="welcome-logo"
        src="./src/images/T-outingsLogo.png"
        alt="logo"
      />
      <h1>
        <span>Welcome To Outings</span>
      </h1>
      <div>Let's plan some trips you can enjoy!</div>
    </div>
  );
};
