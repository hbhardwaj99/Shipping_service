import React from "react";
import { connect } from "react-redux";
function CarrierProfile({ auth, carrier }) {
  if (carrier.isLoaded && auth.isLoaded) {
    return (
      <div style={{ opacity: "0.6", backgroundColor: "grey" }} className="card">
        <div className="card-body">
          <h3 className="card-title">Profile</h3>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Hey Carrier</li>
          <li className="list-group-item">First Name:{carrier.firstName}</li>
          <li className="list-group-item">Last Name:{carrier.lastName}</li>
          <li className="list-group-item">Gender:{carrier.gender}</li>
          <li className="list-group-item">Email :{auth.email}</li>
          <li className="list-group-item">Contact Number:{carrier.phone}</li>
          <li className="list-group-item">Address:{carrier.address}</li>
          <li className="list-group-item">City:{carrier.city}</li>
          <li className="list-group-item">State:{carrier.state}</li>
          <li className="list-group-item">Pin Code:{carrier.zip}</li>
        </ul>
      </div>
    );
  } else {
    return <h1>Loading</h1>;
  }
}
const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    carrier: state.firebase.profile,
  };
};
export default connect(mapStateToProps)(CarrierProfile);
