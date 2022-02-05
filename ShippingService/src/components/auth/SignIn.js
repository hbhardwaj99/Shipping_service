import React, { useState } from "react";
import { connect } from "react-redux";
import { signIn } from "../../store/actions/authActions";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import "./Style.css";
function SignIn(props) {
  const { authError } = props;
  const { profile } = props;
  const [localState, setState] = useState({
    email: "",
    password: "",
    emailError: "",
    passwordError: "",
  });
  const handelChange = (event) => {
    setState({
      ...localState,
      [event.target.id]: event.target.value,
      emailError: null,
      passwordError: null,
    });
  };
  const handelSubmit = (event) => {
    event.preventDefault();
    const isVaild = vaildate();

    if (isVaild) props.signIn(localState);
  };
  const vaildate = () => {
    if (localState.email.includes("@") && localState.password.length > 0) {
      return true;
    }

    if (!localState.email.includes("@") && !localState.password.length > 0) {
      setState({
        ...localState,
        passwordError: "enter password",
        emailError: "enter vaild email",
      });
    } else if (!localState.email.includes("@")) {
      setState({ ...localState, emailError: "enter vaild email" });
    } else if (!localState.password.length > 0) {
      setState({ ...localState, passwordError: "enter password" });
    }
    return false;
  };
  const auth = props.auth;
  if (auth.isLoaded && profile.isLoaded) {
    if (auth.uid) return <Redirect to={"/" + profile.typeOfUser} />;
    return (
      <>
        <Helmet>
          <title>Sign In</title>
        </Helmet>
        <div className="signInDiv">
          <form className="text-center border border-light p-5">
            <p className="h4 mb-4">Sign in</p>

            <input
              type="email"
              id="email"
              className="form-control mb-4"
              placeholder="E-mail"
              onChange={handelChange}
            />

            <input
              type="password"
              id="password"
              className="form-control mb-4"
              placeholder="Password"
              onChange={handelChange}
            />

            <button
              className="btn btn-info btn-block my-4"
              type="submit"
              onClick={handelSubmit}
            >
              Sign in
            </button>
            {authError ? (
              <span className="badge badge-danger">Login Failed</span>
            ) : null}
            {localState.emailError ? (
              <span className="badge badge-danger">
                {localState.emailError}
              </span>
            ) : null}
            <br />
            {localState.passwordError ? (
              <span className="badge badge-danger">
                {localState.passwordError}
              </span>
            ) : null}
            <h5>Not a member?</h5>
            <Link to="/signup">
              <h5>Register</h5>
            </Link>
          </form>
        </div>
      </>
    );
  } else {
    return <div>Loading</div>;
  }
}
const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth,
    profile: state.firebase.profile,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (creds) => dispatch(signIn(creds)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
