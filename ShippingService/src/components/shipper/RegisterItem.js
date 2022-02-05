import React, { useState } from "react";
import { connect } from "react-redux";
import { createItem } from "../../store/actions/ShipperActions";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import "./Style.css";
function RegisterItem({ auth, profile, createItem, history }) {
  const [localState, setState] = useState({
    pickupState: "",
    deliveryState: "",
    dimension: "",
    brittleItem: "",
    pickupAddress: "",
    deliveryAddress: "",
    pickupDate: "",
    deliveryDate: "",
    weight: "",
    packed: "",
  });
  const [error, setError] = useState({
    errorPickupState: "",
    errorDeliveryState: "",
    errorDimension: "",
    errorBrittleItem: "",
    errorPickupAddress: "",
    errorDeliveryAddress: "",
    errorPickupDate: "",
    errorDeliveryDate: "",
    errorWeight: "",
    errorPacked: "",
  });
  const handelChange = (event) => {
    setState({ ...localState, [event.target.id]: event.target.value });
  };
  const isValidate = () => {
    let isValid = true;
    if (localState.pickupState <= 0) {
      isValid = false;
      setError((error) => ({
        ...error,
        errorPickupState: "Select pickup state",
      }));
    } else {
      setError((error) => ({
        ...error,
        errorPickupState: "",
      }));
    }
    if (localState.deliveryState <= 0) {
      isValid = false;
      setError((error) => ({
        ...error,
        errorDeliveryState: "Select delivery state",
      }));
    } else {
      setError((error) => ({
        ...error,
        errorDeliveryState: "",
      }));
    }
    if (localState.dimension <= 0) {
      isValid = false;
      setError((error) => ({
        ...error,
        errorDimension: "Enter dimension",
      }));
    } else {
      setError((error) => ({
        ...error,
        errorDimension: "",
      }));
    }
    if (localState.brittleItem <= 0) {
      isValid = false;
      setError((error) => ({
        ...error,
        errorBrittleItem: "Select item is brittle or no",
      }));
    } else {
      setError((error) => ({
        ...error,
        errorBrittleItem: "",
      }));
    }
    if (localState.weight <= 0) {
      isValid = false;
      setError((error) => ({ ...error, errorWeight: "Enter weight" }));
    } else {
      setError((error) => ({ ...error, errorWeight: "" }));
    }
    if (localState.packed <= 0) {
      isValid = false;
      setError((error) => ({
        ...error,
        errorPacked: "select is item is packed or not",
      }));
    } else {
      setError((error) => ({
        ...error,
        errorPacked: "",
      }));
    }
    if (localState.pickupAddress <= 0) {
      isValid = false;
      setError((error) => ({
        ...error,
        errorPickupAddress: "Enter pickup address",
      }));
    } else {
      setError((error) => ({
        ...error,
        errorPickupAddress: "",
      }));
    }
    if (localState.deliveryAddress <= 0) {
      isValid = false;
      setError((error) => ({
        ...error,
        errorDeliveryAddress: "Enter delivery address",
      }));
    } else {
      setError((error) => ({
        ...error,
        errorDeliveryAddress: "",
      }));
    }
    if (localState.pickupDate <= 0) {
      isValid = false;
      setError((error) => ({ ...error, errorPickupDate: "Enter pickup date" }));
    } else {
      setError((error) => ({ ...error, errorPickupDate: "" }));
    }
    if (localState.deliveryDate <= 0) {
      isValid = false;
      setError((error) => ({
        ...error,
        errorDeliveryDate: "Enter delivery date",
      }));
    } else {
      setError((error) => ({
        ...error,
        errorDeliveryDate: "",
      }));
    }
    return isValid;
  };
  const handelSubmit = (event) => {
    event.preventDefault();
    const isValid = isValidate();
    console.log(isValid);
    if (isValid) {
      createItem(localState);
      history.push("/shipper");
    }
  };
  if (auth.isLoaded && profile.isLoaded) {
    if (profile.typeOfUser === "carrier") return <Redirect to="/carrier" />;
    if (!auth.uid) return <Redirect to="/signin/" />;
    return (
      <div style={{ color: "black" }} className="registerItemDiv">
        <Link to="/shipper">
          <button
            style={{ float: "right" }}
            type="submit"
            className="btn btn-primary"
          >
            Back
          </button>
        </Link>
        <h1>Register Item</h1>
        <br />
        <form>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="inputState">
                <b>Current State</b>
              </label>
              <select
                id="pickupState"
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
              <small style={{ color: "red" }}>{error.errorPickupState}</small>
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="inputState">
                <b>Delivery State</b>
              </label>
              <select
                id="deliveryState"
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
              <small style={{ color: "red" }}>{error.errorDeliveryState}</small>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="inputEmail4">
                <b>Dimension</b>
              </label>
              <input
                type="text"
                className="form-control"
                id="dimension"
                placeholder="Dimension"
                onChange={handelChange}
              />
              <small style={{ color: "red" }}>{error.errorDimension}</small>
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="inputState">
                <b>Brittle Item</b>
              </label>
              <select
                id="brittleItem"
                className="form-control"
                onChange={handelChange}
              >
                <option value="">Choose</option>
                <option>Yes</option>
                <option>No</option>
              </select>
              <small style={{ color: "red" }}>{error.errorBrittleItem}</small>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="inputEmail4">
                <b>Estimated Weight</b>
              </label>
              <input
                type="text"
                className="form-control"
                id="weight"
                placeholder="Enter estimated Weight in Kg"
                onChange={handelChange}
              />
              <small style={{ color: "red" }}>{error.errorWeight}</small>
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="inputState">
                <b>Item Packed</b>
              </label>
              <select
                id="packed"
                className="form-control"
                onChange={handelChange}
              >
                <option value="">Choose</option>
                <option>Yes</option>
                <option>No</option>
              </select>
              <small style={{ color: "red" }}>{error.errorPacked}</small>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="inputAddress">
              <b>Pick Up Address</b>
            </label>
            <input
              type="text"
              className="form-control"
              id="pickupAddress"
              placeholder="1234 Main St"
              onChange={handelChange}
            />
            <small style={{ color: "red" }}>{error.errorPickupAddress}</small>
          </div>
          <div className="form-group">
            <label htmlFor="inputAddress">
              <b>Delivery Address</b>
            </label>
            <input
              type="text"
              className="form-control"
              id="deliveryAddress"
              placeholder="1234 Main St"
              onChange={handelChange}
            />
            <small style={{ color: "red" }}>{error.errorDeliveryAddress}</small>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="example-datetime-local-input">
                <b>Pickup Date</b>
              </label>
              <input
                className="form-control"
                type="datetime-local"
                id="pickupDate"
                onChange={handelChange}
              />
              <small style={{ color: "red" }}>{error.errorPickupDate}</small>
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="example-datetime-local-input">
                <b>Delivery Date</b>
              </label>
              <input
                className="form-control"
                type="datetime-local"
                id="deliveryDate"
                onChange={handelChange}
              />
              <small style={{ color: "red" }}>{error.errorDeliveryDate}</small>
            </div>
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            onClick={handelSubmit}
          >
            Register Item
          </button>
        </form>
      </div>
    );
  } else {
    return <div>Loading</div>;
  }
}
const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
  };
};
const mapDistpatchToProps = (dispatch) => {
  return {
    createItem: (localState) => dispatch(createItem(localState)),
  };
};

export default connect(mapStateToProps, mapDistpatchToProps)(RegisterItem);
