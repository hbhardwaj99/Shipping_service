import React, { useState } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { signUp } from "../../store/actions/authActions";
import { Helmet } from "react-helmet";
function SignUp(props) {
  const auth = props.auth;
  const [localState, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    gender: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    typeOfUser: "",
  });
  const [error, setError] = useState({
    errorFirstName: "",
    errorLastName: "",
    errorEmail: "",
    errorPassword: "",
    errorGender: "",
    errorPhone: "",
    errorAddress: "",
    errorCity: "",
    errorState: "",
    errorZip: "",
    errorTypeOfUser: "",
  });

  if (auth.isLoaded) {
    const handelChange = (event) => {
      setState({ ...localState, [event.target.id]: event.target.value });
    };
    const handelSubmit = (event) => {
      event.preventDefault();
      const isVaild = vaildate(event);

      if (isVaild) props.signUp(localState);
    };
    function containsSpecialCharacters(str) {
      var regex = /[ !@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/g;
      return regex.test(str);
    }
    const vaildate = (event) => {
      let isVaild = true;
      const passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

      const numbers = /^[0-9]+$/;

      if (
        localState.firstName.length <= 0 ||
        containsSpecialCharacters(localState.firstName)
      ) {
        isVaild = false;
        setError((error) => ({
          ...error,
          errorFirstName: "Enter Valid First Name",
        }));
      } else {
        setError((error) => ({ ...error, errorFirstName: "" }));
      }
      if (
        localState.lastName.length <= 0 ||
        containsSpecialCharacters(localState.lastName)
      ) {
        isVaild = false;
        setError((error) => ({
          ...error,
          errorLastName: "Enter Valid Last Name",
        }));
      } else {
        setError((error) => ({ ...error, errorLastName: "" }));
      }
      if (!localState.email.includes("@")) {
        isVaild = false;
        setError((error) => ({
          ...error,
          errorEmail: "Enter vaild email address",
        }));
      } else {
        setError((error) => ({
          ...error,
          errorEmail: "",
        }));
      }
      if (!localState.password.match(passw)) {
        isVaild = false;
        setError((error) => ({
          ...error,
          errorPassword:
            "Password between 6 to 20 characters which contain at least one numeric digit, one uppercase and one lowercase letter",
        }));
      } else {
        setError((error) => ({
          ...error,
          errorPassword: "",
        }));
      }
      if (localState.gender.length <= 0) {
        isVaild = false;
        setError((error) => ({ ...error, errorGender: "Select gender" }));
      } else {
        setError((error) => ({ ...error, errorGender: "" }));
      }
      if (localState.phone.length > 10 || localState.phone.length <= 0) {
        isVaild = false;
        setError((error) => ({
          ...error,
          errorPhone: "Enter vaild contact no",
        }));
      } else if (
        localState.phone.length === 10 &&
        !localState.phone.match(numbers)
      ) {
        isVaild = false;
        setError((error) => ({
          ...error,
          errorPhone: "Enter valid contact no",
        }));
      } else {
        setError((error) => ({
          ...error,
          errorPhone: "",
        }));
      }
      if (localState.address.length <= 0) {
        isVaild = false;
        setError((error) => ({ ...error, errorAddress: "Enter address" }));
      } else {
        setError((error) => ({ ...error, errorAddress: "" }));
      }
      if (localState.city.length <= 0) {
        isVaild = false;
        setError((error) => ({ ...error, errorCity: "Enter City" }));
      } else {
        setError((error) => ({ ...error, errorCity: "" }));
      }
      if (localState.state.length <= 0) {
        isVaild = false;
        setError((error) => ({ ...error, errorState: "Select state" }));
      } else {
        setError((error) => ({ ...error, errorState: "" }));
      }
      if (localState.zip.length < 6) {
        isVaild = false;
        setError((error) => ({ ...error, errorZip: "Enter vaild zip" }));
      } else if (!localState.zip.match(numbers)) {
        isVaild = false;
        setError((error) => ({ ...error, errorZip: "Enter vaild zip" }));
      } else {
        setError((error) => ({ ...error, errorZip: "" }));
      }
      if (localState.typeOfUser.length <= 0) {
        isVaild = false;
        setError((error) => ({
          ...error,
          errorTypeOfUser: "Select type of user you are!!",
        }));
      } else {
        setError((error) => ({
          ...error,
          errorTypeOfUser: "",
        }));
      }
      return isVaild;
    };
    if (auth.uid) return <Redirect to="/shipper" />;
    return (
      <>
        <Helmet>
          <title>Sign Up</title>
        </Helmet>
        <div style={{ color: "black" }} className="signUpDiv">
          <h1>Sign Up</h1>
          <form>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="firstName">
                  <b>FirstName</b>
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="firstName"
                  placeholder="First Name"
                  onChange={handelChange}
                  pattern="[A-Za-z]"
                />
                <small style={{ color: "red" }}>{error.errorFirstName}</small>
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="lastName">
                  <b>Last Name</b>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  placeholder="Last Name"
                  onChange={handelChange}
                />
                <small style={{ color: "red" }}>{error.errorLastName}</small>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="inputEmail4">
                  <b>Email</b>
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Email"
                  onChange={handelChange}
                />
                <small style={{ color: "red" }}>{error.errorEmail}</small>
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="inputPassword4">
                  <b>Password</b>
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Password"
                  onChange={handelChange}
                />
                <small style={{ color: "red" }}>{error.errorPassword}</small>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="inputEmail4">
                  <b>Gender</b>
                </label>
                <select
                  id="gender"
                  className="form-control"
                  onChange={handelChange}
                >
                  <option value="">Choose...</option>
                  <option>Male</option>
                  <option>Female</option>
                </select>
                <small style={{ color: "red" }}>{error.errorGender}</small>
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="inputPhone4">
                  <b>Contact No:</b>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="phone"
                  placeholder="Contact No."
                  onChange={handelChange}
                />
                <small style={{ color: "red" }}>{error.errorPhone}</small>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="inputAddress">
                <b>Address</b>
              </label>
              <input
                type="text"
                className="form-control"
                id="address"
                placeholder="1234 Main St"
                onChange={handelChange}
              />
              <small style={{ color: "red" }}>{error.errorAddress}</small>
            </div>

            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="inputCity">
                  <b>City</b>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="city"
                  placeholder="City"
                  onChange={handelChange}
                />
                <small style={{ color: "red" }}>{error.errorCity}</small>
              </div>
              <div className="form-group col-md-4">
                <label htmlFor="inputState">
                  <b>State</b>
                </label>
                <select
                  id="state"
                  className="form-control"
                  onChange={handelChange}
                >
                  <option value="">Choose...</option>
                  <option>Andhra Pradesh</option>
                  <option>Arunachal Pradesh</option>
                  <option>Assam</option>
                  <option>Bihar</option>
                  <option>Chhattisgarh</option>
                  <option>Goa</option>
                  <option>Gujarat</option>
                  <option>Haryana</option>
                  <option>Himachal Pradesh</option>
                  <option>Jammu and Kashmir</option>
                  <option>Jharkhand</option>
                  <option>Karnataka</option>
                  <option>Kerala</option>
                  <option>Madhya Pradesh</option>
                  <option>Maharashtra</option>
                  <option>Manipur</option>
                  <option>Meghalaya</option>
                  <option>Mizoram</option>
                  <option>Nagaland</option>
                  <option>Odisha</option>
                  <option>Punjab</option>
                  <option>Rajasthan</option>
                  <option>Sikkim</option>
                  <option>Tamil Nadu</option>
                  <option>Telangana</option>
                  <option>Tripura</option>
                  <option>Uttar Pradesh</option>
                  <option>Uttarakhand</option>
                  <option>West Bengal</option>
                  <option>Delhi</option>
                </select>
                <small style={{ color: "red" }}>{error.errorState}</small>
              </div>
              <div className="form-group col-md-2">
                <label htmlFor="inputZip">
                  <b>Zip</b>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="zip"
                  placeholder="zip"
                  onChange={handelChange}
                />
                <small style={{ color: "red" }}>{error.errorZip}</small>
              </div>
            </div>
            <div className="form-group">
              <div className="form-check-inline">
                <label className="form-check-label">
                  <input
                    type="radio"
                    className="form-check-input"
                    name="typeOfUser"
                    onChange={() => {
                      setState({ ...localState, typeOfUser: "carrier" });
                    }}
                  />
                  <b>I am Carrier</b>
                </label>
              </div>
              <div className="form-check-inline">
                <label className="form-check-label">
                  <input
                    type="radio"
                    className="form-check-input"
                    name="typeOfUser"
                    onChange={() => {
                      setState({ ...localState, typeOfUser: "shipper" });
                    }}
                  />
                  <b>I am shipper</b>
                </label>
              </div>
            </div>
            <div className="form-group">
              <small style={{ color: "red" }}>{error.errorTypeOfUser}</small>
              {props.authError ? (
                <span className="badge badge-danger">{props.authError}</span>
              ) : null}
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              onClick={handelSubmit}
            >
              Sign Up
            </button>
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
    auth: state.firebase.auth,
    authError: state.auth.authError,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (newUser) => dispatch(signUp(newUser)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
