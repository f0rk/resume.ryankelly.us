import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import moment from "moment";

import Header from "../Header";
import Icon from "./Icon";

import "./style.sass";


class Connect extends Component {

  render() {

    var icons = [
        (
            <Icon
                    key="email"
                    icon="envelope"
                    href="mailto:rpkelly22@gmail.com"
                    text="rpkelly22@gmail.com" />
        ),
        (
            <Icon
                    key="phone"
                    icon="phone"
                    href="tel:8452225529"
                    text="845.222.5529" />
        ),
        (
            <Icon
                    key="github"
                    icon="github"
                    href="https://github.com/f0rk"
                    text="f0rk"
                    printUrl={true} />
        ),
        (
            <Icon
                    key="twitter"
                    icon="twitter"
                    href="https://twitter.com/rpkelly22"
                    text="rpkelly22"
                    printUrl={true} />
        ),
        (
            <Icon
                    key="linkedin"
                    icon="linkedin"
                    href="https://linkedin.com/in/rpkelly"
                    text="rpkelly"
                    printUrl={true} />
        ),
    ];

    return (
        <div className="connect">

            <Header id="connect">
                connect
            </Header>

            <div className="icons">
                {icons}
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
)(Connect);
