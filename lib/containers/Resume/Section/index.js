import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import "./style.sass";


class Section extends Component {

  static propTypes() {
    return {
      title: React.PropTypes.string.isRequired,
    };
  }

  render() {
    return (
        <div className="section">
            <div className="title">
                {this.props.title}
            </div>

            <div className="children">
                {this.props.children}
            </div>
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
)(Section);
