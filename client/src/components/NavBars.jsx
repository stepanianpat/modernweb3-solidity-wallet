import React from "react";

function NavBar({ handleLoginClick }) {
  const handleClick = () => {
    handleLoginClick();
  };
  return (
    <div className="navbarr">
      <div>
        <span onClick={handleClick} className="loginicon">
          Sign In
        </span>
      </div>
    </div>
  );
}

export default NavBar;
