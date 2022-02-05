import React from "react";
import Item from "./Item";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import { Link } from "react-router-dom";
import "./Style.css";
function ItemDetails(props) {
  const items = props.items;
  if (props.value) {
    if (items.length > 0) {
      return (
        <div className="carrierTable">
          <Link to="/carrier">
            <button
              style={{ float: "right" }}
              type="submit"
              className="btn btn-primary"
            >
              Back
            </button>
          </Link>
          <br />
          <br />
          <table
            style={{ opacity: "0.9" }}
            className="table table-striped table-dark"
          >
            <thead>
              <tr>
                <th>Pickup State</th>
                <th>Delivery State</th>
                <th>Dimension</th>
                <th>Brittle</th>
                <th>Weight</th>
                <th>Packed</th>
              </tr>
            </thead>
            <tbody>
              {items &&
                items.map((item) => {
                  return <Item item={item} key={item.id} />;
                })}
            </tbody>
          </table>
        </div>
      );
    } else
      return (
        <>
          <Link to="/carrier">
            <button
              style={{ float: "right" }}
              type="submit"
              className="btn btn-primary"
            >
              Back
            </button>
          </Link>
          <br />
          <h1>No Item avialable in this route!!</h1>
        </>
      );
  } else return <h1>Loading</h1>;
}
const mapStateToProps = (state, ownProps) => {
  const items = state.firestore.ordered.items;
  const searchState = ownProps.location.state;

  const tempItems =
    items &&
    items.filter((item) => {
      if (
        item.pickupState === searchState.state.currentState &&
        item.deliveryState === searchState.state.destinationState
      )
        return item;
      else return null;
    });

  return {
    items: tempItems,
    value: state.firestore.status.requested.items,
  };
};
export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "items" }])
)(ItemDetails);
