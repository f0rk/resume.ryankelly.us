import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import "./style.sass";


class Technology extends Component {

  static propTypes() {
    return {
      type: React.PropTypes.string.isRequired,
    };
  }

  render() {
    return (
        <div className={`technology ${this.props.type}`}>
            <div className="type">
                 {this.props.type}
            </div>

            {this.props.children}
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
)(Technology);
