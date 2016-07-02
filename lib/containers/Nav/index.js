import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { showDownloadPopup } from "../../actions";
import { downloadPDF } from "../../utils";

import "./style.sass";


class Nav extends Component {

  static propTypes() {
    return {
      onPDFClick: React.PropTypes.func.isRequired,
    };
  }

  render() {
    return (
        <div className="nav">
            <span className="name">ryan kelly</span>
            <ul>
                <li>
                    <a href="#about">about</a>
                </li>
                <li>
                    <a href="#resume">resume</a>
                </li>
                <li>
                    <a href="#connect">connect</a>
                </li>
                <li>
                    <a href="#" onClick={this.props.onPDFClick}>pdf</a>
                </li>
            </ul>
        </div>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    onPDFClick: (e) => {
      e.preventDefault();
      dispatch(showDownloadPopup());
      downloadPDF();
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Nav);
