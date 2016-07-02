import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import moment from "moment";

import Header from "../Header";
import Entry from "./Entry";
import Technology from "./Technology";
import Section from "./Section";

import "./style.sass";


class Resume extends Component {

  render() {

    var technologies = [
        (
            <Technology
                    key="languages"
                    type="languages">
                <ul>
                    <li>python</li>
                    <li>sql</li>
                    <li>javascript</li>
                </ul>
            </Technology>
        ),
        (
            <Technology
                    key="libraries"
                    type="libraries">
                <ul>
                    <li>sqlalchemy</li>
                    <li>react.js</li>
                    <li>pyramid</li>
                    <li>mako</li>
                </ul>
            </Technology>
        ),
        (
            <Technology
                    key="tools"
                    type="tools">
                <ul>
                    <li>postgresql (+extensions +postgis)</li>
                    <li>aws (+ec2 +s3 +sqs +rds)</li>
                    <li>ubuntu</li>
                    <li>salt</li>
                </ul>
            </Technology>
        )
    ];

    technologies = (
        <div className="technologies">
            {technologies}
        </div>
    );

    var entries = [
        (
            <Entry
                    key="truveris"
                    position="software architect"
                    location="truveris"
                    period="2011-">
                <ul>
                    <li>Architecture and implementation of OneRx. OneRx is a consumer-facing service to find discounts and coupons as well as look up your copy. Led development over the course of two years where I implemented a majority of backend services including primary API, performed 5 new vendor integrations, major contributor and implementation manager for OneRx.com front end development, minor contributor to iOS and Android applications.</li>
                    <li>Architecture and implementation of TruBid. TruBid is a service to facilitate contracting for pharmacy benefit services. Main developer over the course of several years and primary implementer of backend services. Current maintainer.</li>
                    <li>Implementation of TruGuard. TruGuard is a service to review pharmacy claims for accuracy. Implemented majority of backend services. Architected and implemented majority of new functionality. Current maintainer.</li>
                    <li>Architected and implemented current system infrastructure and development workflows. Automated build system, centralized logging, configuration management, workload management, file storage and transfer, one-click deployment, and job scheduling.</li>
                    <li>Primary workload and scheduling manager for all projects for over three years. Responsible for ensuring all committed user stories for a given release were implemented.</li>
                    <li>Primary code reviewer for four years.</li>
                    <li>Manager of most junior developers as well as responsible for the on-boarding of most developers including code review, goal setting, and reviews. Currently managing two developers.</li>
                </ul>
            </Entry>
        ),
        (
            <Entry
                    key="livetechnology"
                    position="systems administrator"
                    location="livetechnology"
                    period="2010-2011">
                <ul>
                    <li>Primary systems administrator in a primarily Windows environment. Responsible for deployment and new hardware installs. 24/7 on call. Infrastructure in two collocation facilities. Added extensive monitoring and implemented log analysis and visualization tools.</li>
                </ul>
            </Entry>
        ),
        (
            <Entry
                    key="emory"
                    position="research programmer"
                    location="emory"
                    period="2008-2009">
                <ul>
                    <li>Implemented a web session playback tool. Information collected by a browser plugin in the university's library about search and research. Sessions later re-assembled and web pages captured to analyze inefficiencies. Published paper as co-author.</li>
                    <li>Java applet deployed on mechanical Turk to investigate if mouse movement over a blurred view could approximate eye tracking.</li>
                </ul>
            </Entry>
        ),
    ];

    return (
        <div className="resume">

            <Header id="resume">
                résumé
            </Header>

            <Section
                   title="technologies">
                {technologies}
            </Section>

            <Section
                    title="experience">
                {entries}
            </Section>
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
)(Resume);
