import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import moment from "moment";

import Header from "../Header";

import "./style.sass";


class About extends Component {

  render() {

    const engineeringYears = moment().diff(moment("20080601", "YYYYMMDD"), "years");
    const managingYears = moment().diff(moment("20120201", "YYYYMMDD"), "years");

    return (
        <div className="about">

            <Header id="about">
                about
            </Header>

            <p>
                People and business are enabled by software. Whether it is for
                enhancing profit or doing good and everything in between,
                carefully crafted software helps us achieve whatever our goals
                are. Programming, as an activity, should be dedicated to
                designing and building such software. Programming is not and
                should not be an end itself. It is a means to an end. I have
                dedicated the past {engineeringYears} years to designing and
                building software with this in mind. I have spent the past {managingYears} years
                as a leader in engineering. All the
                while, I have cultivated this ethic, created processes that
                enable the efficient creation of software, and, most
                importantly, solved real problems for people and business.
            </p>

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
)(About);
