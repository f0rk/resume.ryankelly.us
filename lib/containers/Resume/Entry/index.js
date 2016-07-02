import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import "./style.sass";


class Entry extends Component {

  static propTypes() {
    return {
      title: React.PropTypes.string.isRequired,
      position: React.PropTypes.string.isRequired,
      period: React.PropTypes.string.isRequired,
    };
  }

  render() {
    return (
        <div className="entry">
            <div className="left">
                <span className="position">{this.props.position}</span>
                <span className="location">{this.props.location}</span>
                <span className="period">{this.props.period}</span>
            </div>

            <div className="right">
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
)(Entry);
