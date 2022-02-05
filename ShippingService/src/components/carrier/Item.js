import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
function Item({ item, value, phone }) {
  if (value) {
    console.log("hello:");
    console.log(phone);
    return (
      <tr>
        <td>{item.pickupState}</td>
        <td>{item.deliveryState}</td>
        <td>{item.dimension}</td>
        <td>{item.brittleItem}</td>
        <td>{item.weight}</td>
        <td>{item.packed}</td>
        <td>
          <button
            className="btn btn-primary"
            onClick={() =>
              alert("For this item contact to this number:" + phone)
            }
          >
            Interested
          </button>
        </td>
      </tr>
    );
  } else return <></>;
}
const mapStateToProps = (state, ownProps) => {
  const { authorId } = ownProps.item;

  const { users } = state.firestore.ordered;
  let phone;

  users &&
    users.filter((user) => {
      if (user.id === authorId) {
        phone = user.phone;
        return user;
      } else return null;
    });

  return {
    phone,
    value: state.firestore.status.requested.users,
  };
};
export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "users" }])
)(Item);
