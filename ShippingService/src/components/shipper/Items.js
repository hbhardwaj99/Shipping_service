import React from "react";
import { Link } from "react-router-dom";
function Items(props) {
  const item = props.item;

  return (
    <>
      <tr>
        <td>{item.pickupState}</td>
        <td>{item.deliveryState}</td>
        <td>{item.dimension}</td>
        <td>{item.brittleItem}</td>
        <td>{item.weight}</td>
        <td>{item.packed}</td>
        <td>
          <Link to={"/shipper/item/" + item.id}>
            <button className="btn btn-primary">More Details</button>
          </Link>
        </td>
        <td>
          <Link to={"/shipper/update/" + item.id}>
            <button className="btn btn-primary">Edit</button>
          </Link>
        </td>
        <Link to={"/shipper/delete/" + item.id}>
          <td>
            <button className="btn btn-primary">Delete</button>
          </td>
        </Link>
      </tr>
    </>
  );
}

export default Items;
