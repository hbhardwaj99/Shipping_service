import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { deleteItem } from "../../store/actions/ShipperActions";
import { Link } from "react-router-dom";
function DeleteItem(props) {
  const { item } = props;
  const handelClick = (event) => {
    event.preventDefault();

    props.deleteItem(props.match.params.id);
    props.history.push("/shipper");
  };
  if (item) {
    return (
      <div className="updateItemDiv">
        <Link to="/shipper">
          <button
            style={{ float: "right" }}
            type="submit"
            className="btn btn-primary"
          >
            Back
          </button>
        </Link>
        <h1>Delete Item </h1>
        <br />
        <table className="table table-borderless">
          <tbody>
            <tr>
              <td>
                <h5>Current State: {item.pickupState}</h5>
              </td>
              <td>
                <h5>Delivery State: {item.deliveryState}</h5>
              </td>
            </tr>
            <tr>
              <td>
                <h5>Dimension: {item.dimension}</h5>
              </td>
              <td>
                <h5>Brittle Item: {item.brittleItem}</h5>
              </td>
            </tr>
            <tr>
              <td>
                <h5>Estimated Weight: {item.weight}</h5>
              </td>
              <td>
                <h5>Packed Item: {item.packed}</h5>
              </td>
            </tr>
            <tr>
              <td>
                <h5>Pickup Address: {item.pickupAddress}</h5>
              </td>
              <td>
                <h5>Delivery Address: {item.deliveryAddress}</h5>
              </td>
            </tr>

            <tr>
              <td>
                <h5>Pickup Date: {item.pickupDate}</h5>
              </td>
              <td>
                <h5>Delivery Date: {item.deliveryDate}</h5>
              </td>
            </tr>
          </tbody>
        </table>

        <button type="submit" onClick={handelClick} className="btn btn-primary">
          Delete Item
        </button>
      </div>
    );
  } else {
    return (
      <div className="container">
        <p>Loading project</p>
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
    deleteItem: (id) => dispatch(deleteItem(id)),
  };
};
export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([{ collection: "items" }])
)(DeleteItem);
