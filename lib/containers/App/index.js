import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import About from "../About";
import Nav from "../Nav";
import Resume from "../Resume";
import Connect from "../Connect";
import DownloadPopup from "../DownloadPopup";

import "./style.sass";


class App extends Component {

  render() {
    return (
        <div className="main">
            <Nav />
            <hr />
            <About />
            <hr />
            <Resume />
            <hr />
            <Connect />
            <DownloadPopup />
        </div>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
