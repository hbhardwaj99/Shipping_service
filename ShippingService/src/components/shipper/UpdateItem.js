import React, { useState } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { updateItem } from "../../store/actions/ShipperActions";
import { Link } from "react-router-dom";
import "./Style.css";
function UpdateItem(props) {
  const { item } = props;

  const [localState, setState] = useState({
    currentState: item.pickupState,
    deliveryState: item.deliveryState,
    dimension: item.dimension,
    brittleItem: item.brittleItem,
    pickupAddress: item.pickupAddress,
    deliveryAddress: item.deliveryAddress,
    pickupDate: item.pickupDate,
    deliveryDate: item.deliveryDate,
    weight: item.weight,
    packed: item.packed,
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
    if (localState.currentState <= 0) {
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
    console.log(localState);
    event.preventDefault();
    const isValid = isValidate();
    console.log(isValid);
    if (isValid) {
      props.updateItem(localState, props.match.params.id);
      props.history.push("/shipper");
    }
  };

  if (item) {
    return (
      <div style={{ color: "white" }} className="updateItemDiv">
        <Link to="/shipper">
          <button
            style={{ float: "right" }}
            type="submit"
            className="btn btn-primary"
          >
            Back
          </button>
        </Link>
        <h1>Update Item</h1>

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
                <option defaultValue>{item.pickupState}</option>
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
                {" "}
                <b>Delivery State</b>
              </label>
              <select
                id="deliveryState"
                className="form-control"
                onChange={handelChange}
              >
                <option defaultValue>{item.deliveryState}</option>
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
                defaultValue={item.dimension}
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
                <option defaultValue>{item.brittleItem}</option>
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
                placeholder="Estimated Weight"
                onChange={handelChange}
                defaultValue={item.weight}
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
                <option defaultValue>{item.packed}</option>
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
              defaultValue={item.pickupAddress}
            />
            <small style={{ color: "red" }}>{error.errorPickupAddress}</small>
          </div>
          <div className="form-group">
            <label htmlFor="inputAddress">
              {" "}
              <b>Delivery Address</b>
            </label>
            <input
              type="text"
              className="form-control"
              id="deliveryAddress"
              placeholder="1234 Main St"
              onChange={handelChange}
              defaultValue={item.deliveryAddress}
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
                defaultValue={item.pickupDate}
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
                defaultValue={item.deliveryDate}
              />
              <small style={{ color: "red" }}>{error.errorDeliveryDate}</small>
            </div>
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            onClick={handelSubmit}
          >
            Update Item
          </button>
        </form>
      </div>
    );
  } else {
    return (
      <div className="container">
        <p>Loading item</p>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const items = state.firestore.data.items;
  const item = items ? items[id] : null;

  return {
    item,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    updateItem: (item, id) => dispatch(updateItem(item, id)),
  };
};
export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([{ collection: "items" }])
)(UpdateItem);
