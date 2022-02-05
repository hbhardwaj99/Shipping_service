import React from "react";
import ShipperProfile from "../shipper/ShipperProfile";
import { Switch, Route, Redirect } from "react-router-dom";
import ShipperItems from "../shipper/ShipperItems";
import ItemDetails from "../shipper/ItemDetails";
import { Helmet } from "react-helmet";
import UpdateItem from "../shipper/UpdateItem";
import DeleteItem from "../shipper/DeleteItem";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
function ShipperDashboard({ items, auth, profile }) {
  if (auth.isLoaded && profile.isLoaded) {
    if (profile.typeOfUser === "carrier") return <Redirect to="/carrier" />;

    if (!auth.uid) return <Redirect to="/signin/" />;

    return (
      <>
        <Helmet>
          <title>Shipper</title>
        </Helmet>
        <br />

        <div className="container-fluid">
          <div className="row">
            <div className="col-3">
              <ShipperProfile />
            </div>
            <div className="col-9">
              <Switch>
                <Route
                  exact
                  path="/shipper"
                  component={() => <ShipperItems items={items} />}
                />
                <Route exact path="/shipper/item/:id" component={ItemDetails} />
                <Route
                  exact
                  path="/shipper/update/:id"
                  component={UpdateItem}
                />
                <Route
                  exact
                  path="/shipper/delete/:id"
                  component={DeleteItem}
                />
              </Switch>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return <div>Loading</div>;
  }
}
const mapStateToProps = (state) => {
  const items = state.firestore.ordered.items;
  const id = state.firebase.auth.uid;
  const tempItems =
    items &&
    items.filter((item) => {
      if (item.authorId === id) return item;
      else return null;
    });

  return {
    items: tempItems,
    auth: state.firebase.auth,
    profile: state.firebase.profile,
  };
};
export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "items" }])
)(ShipperDashboard);
