import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import moment from "moment";

import "./style.sass";


class Icon extends Component {

  static propTypes() {
    return {
      icon: React.PropTypes.string.isRequired,
      href: React.PropTypes.string.isRequired,
      text: React.PropTypes.string.isRequired,
      printUrl: React.PropTypes.bool,
    }
  }

  render() {

    const classNames = ["icon"];
    if (this.props.printUrl) {
        classNames.push("print-url");
    }

    return (
        <a className={classNames.join(" ")} href={this.props.href} target="_blank">
            <i className={`fa fa-${this.props.icon}`} /> <span className="text">{this.props.text}</span>
        </a>
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
)(Icon);
