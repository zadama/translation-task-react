import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { getUser } from "../util/storage";

const Navbar = () => {
  const location = useLocation();

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (getUser() != null) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [location]);

  return (
    <nav>
      <h3>Lost in Translation</h3>

      {isLoggedIn && (
        <div className="nav-links">
          <Link to="/profile">Profile</Link>
          <Link to="/translation">Translation</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
