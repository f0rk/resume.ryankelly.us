import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import "./style.sass";


class Header extends Component {

  static propTypes() {
    return {
      id: React.PropTypes.string.isRequired,
    };
  }

  render() {
    return (
        <div className="header" {...this.props} />
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
)(Header);
