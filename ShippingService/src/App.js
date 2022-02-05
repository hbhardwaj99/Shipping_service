import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./components/layout/NavBar";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import MainDashBoard from "./components/dashboard/MainDashboard";
import ShipperDashboard from "./components/dashboard/ShipperDashboard";
import CarrierDashboard from "./components/dashboard/CarrierDashboard";
import RegisterItem from "./components/shipper/RegisterItem";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />

        <Switch>
          <Route exact path="/" component={MainDashBoard} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/shipper" component={ShipperDashboard} />
          <Route path="/carrier" component={CarrierDashboard} />
          <Route path="/registerItem" component={RegisterItem} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
