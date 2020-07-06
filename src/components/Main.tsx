import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./organisms/header/Header";
import "./styles/main.css";
import Render from "./organisms/Render";
import Footer from "./organisms/footer/Footer";
const Main = () => {
  return (
    <div className="main-wapper">
      <div className="header-section">
        <Header />
      </div>
      <div className="main-inner">
        <Router>
          <Switch>
            <Route exact path="/">
              <Render />
            </Route>
          </Switch>
        </Router>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};
export default Main;
