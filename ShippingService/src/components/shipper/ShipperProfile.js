import React from "react";
import { connect } from "react-redux";
function ShipperProfile({ auth, shipper }) {
  if (shipper.isLoaded) {
    return (
      <div style={{ opacity: "0.6", backgroundColor: "grey" }} className="card">
        <div className="card-body">
          <h3 className="card-title">Profile</h3>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Hey Shipper</li>
          <li className="list-group-item">First Name:{shipper.firstName}</li>
          <li className="list-group-item">Last Name:{shipper.lastName}</li>
          <li className="list-group-item">Gender:{shipper.gender}</li>
          <li className="list-group-item">Email :{auth.email}</li>
          <li className="list-group-item">Contact Numer:{shipper.phone}</li>
          <li className="list-group-item">Address:{shipper.address}</li>
          <li className="list-group-item">City:{shipper.city}</li>
          <li className="list-group-item">State:{shipper.state}</li>
          <li className="list-group-item">Pin Code:{shipper.zip}</li>
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
    shipper: state.firebase.profile,
  };
};
export default connect(mapStateToProps)(ShipperProfile);
