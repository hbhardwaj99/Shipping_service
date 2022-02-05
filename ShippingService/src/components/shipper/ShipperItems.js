import React from "react";
import Items from "./Items";
import "./Style.css";
function ShipperItems({ items }) {
  if (items && items.length > 0) {
    return (
      <div className="shipperTable">
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
                return <Items item={item} key={item.id} />;
              })}
          </tbody>
        </table>
      </div>
    );
  } else return <h1>No Item Found!.Register your item</h1>;
}
export default ShipperItems;
