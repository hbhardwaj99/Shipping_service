import React, { useState } from "react";

import "./Style.css";

function Search(props) {
  const [localState, setState] = useState({
    currentState: "",
    destinationState: "",
    errorCurrentState: "",
    errorDestinationState: "",
  });
  const handelChange = (event) => {
    setState({ ...localState, [event.target.id]: event.target.value });
  };
  const isValidate = () => {
    let isValid = true;
    if (localState.currentState <= 0) {
      isValid = false;
      setState((localState) => ({
        ...localState,
        errorCurrentState: "select current location",
      }));
    } else {
      setState((localState) => ({
        ...localState,
        errorCurrentState: "",
      }));
    }
    if (localState.destinationState <= 0) {
      isValid = false;
      setState((localState) => ({
        ...localState,
        errorDestinationState: "select destination location",
      }));
    } else {
      setState((localState) => ({
        ...localState,
        errorDestinationState: "",
      }));
    }
    return isValid;
  };
  const handelSubmit = (event) => {
    event.preventDefault();
    const isValid = isValidate();

    if (isValid) {
      props.history.push("/carrier/items", {
        state: {
          currentState: localState.currentState,
          destinationState: localState.destinationState,
        },
      });
    }
  };

  return (
    <div className="searchDiv">
      <form className="text-center border border-light p-5">
        <p className="h4 mb-4" style={{color: "white"}}>Search Items</p>
        <label htmlFor="inputState" style={{color: "white"}}>Current State</label>
        <select
          id="currentState"
          className="form-control"
          onChange={handelChange}
        >
          <option value="">Choose...</option>
          <option>Andhra Pradesh</option>
          <option>Arunachal Pradesh</option>
          <option>Assam</option>
          <option>Bihar</option>
          <option>Chhattisgarh</option>
          <option>Delhi</option>
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
          
        </select>

        {<small style={{ color: "red" }}>{localState.errorCurrentState}</small>}
        <br />
        <label htmlFor="inputState">Destination State</label>
        <select
          id="destinationState"
          className="form-control"
          onChange={handelChange}
        >
          <option value="">Choose...</option>
          <option>Andhra Pradesh</option>
          <option>Arunachal Pradesh</option>
          <option>Assam</option>
          <option>Bihar</option>
          <option>Chhattisgarh</option>
          <option>Delhi</option>
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
          
        </select>

        {
          <small style={{ color: "red" }}>
            {localState.errorDestinationState}
          </small>
        }

        <button className="btn btn-info btn-block my-4" onClick={handelSubmit}>
          Search
        </button>
      </form>
    </div>
  );
}

export default Search;
