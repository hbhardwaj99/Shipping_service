import React from "react";
import CarrierProfile from "../carrier/CarrierProfile";
import Search from "../carrier/Search";
import ItemDetails from "../carrier/ItemDetails";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import "./Style.css";
function CarrierDashboard({ auth, profile }) {
  if (auth.isLoaded && profile.isLoaded) {
    if (profile.typeOfUser === "shipper") return <Redirect to="/shipper" />;
    if (!auth.uid) return <Redirect to="/signin/" />;
    return (
      <>
        <Helmet>
          <title>Carrier</title>
        </Helmet>
        <br />

        <div className="container-fluid">
          <div className="row">
            <div className="col-3">
              <CarrierProfile />
            </div>
            <div className="col-9">
              <Switch>
                <Route exact path="/carrier" component={Search} />
                <Route exact path="/carrier/items" component={ItemDetails} />
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
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
  };
};
export default connect(mapStateToProps)(CarrierDashboard);
