import React from "react";

import { Link } from "react-router-dom";
function SignOutLinks() {
  return (
    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
        <Link to="/signup">
          <h4 className="nav-link">Register</h4>
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/signin">
          <h4 className="nav-link">Sign in</h4>
        </Link>
      </li>
    </ul>
  );
}

export default SignOutLinks;
