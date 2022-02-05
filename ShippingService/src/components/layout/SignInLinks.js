import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "../../store/actions/authActions";
import "./Style.css";
function SignInLinks(props) {
  if (props.profile.isLoaded) {
    if (props.profile.typeOfUser === "shipper") {
      return (
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link to="/shipper">
              <h5 className="nav-link">Hey Shipper!!</h5>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/registerItem">
              <h5 className="nav-link">Register Item</h5>
            </Link>
          </li>
          <li className="nav-item">
            <h5 className="nav-link" onClick={props.signOut}>
              Logout
            </h5>
          </li>
          <li>
            <button type="button" className="btn btn-light btn-circle btn-md">
              {props.profile.initials}
            </button>
          </li>
        </ul>
      );
    } else {
      return (
        <ul className="nav navbar-nav ml-auto">
          <li className="nav-item active">
            <Link to="/carrier">
              <h5 style={{ color: "white" }} className="nav-link">
                Hey Carrier!!
              </h5>
            </Link>
          </li>
          <li className="nav-item active">
            <Link to="/carrier">
              <h5 style={{ color: "white" }} className="nav-link">
                Search Item
              </h5>
            </Link>
          </li>
          <li className="nav-item active">
            <h5 className="nav-link" onClick={props.signOut}id="xyz">
              Logout
            </h5>
          </li>
          <li>
            <button type="button" className="btn btn-light btn-circle btn-md">
              {props.profile.initials}
            </button>
          </li>
        </ul>
      );
    }
  } else {
    return <></>;
  }
}
const mapStateToProps = (state) => {
  return {
    profile: state.firebase.profile,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SignInLinks);
