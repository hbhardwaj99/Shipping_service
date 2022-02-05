import React from "react";
import { Link } from "react-router-dom";
import SignOutLinks from "./SignOutLinks";
import SignInLinks from "./SignInLinks";
import { connect } from "react-redux";

function NavBar({ auth, profile }) {
  const links = auth.uid ? <SignInLinks /> : <SignOutLinks />;

  return (
    <nav className="navbar navbar-expand-sm navbar-expand-lg navbar-dark bg-dark mb-3">
      <div className="container">
        <Link to={"/"}>
                  <h1 className="navbar-brand"id="pqr">
            Shipping Service</h1>
        </Link>
        <button
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          {auth.isLoaded && links}
        </div>
      </div>
    </nav>
  );
}
const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
  };
};
export default connect(mapStateToProps)(NavBar);
