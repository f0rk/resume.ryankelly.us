import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Modal from "react-modal";
import Loader from "react-loader";

import { hideDownloadPopup } from "../../actions";

import "./style.sass";

class DownloadPopup extends Component {

  static propTypes() {
    return {
      showDownloadPopup: React.PropTypes.bool.isRequired,
      hideDownloadPopup: React.PropTypes.func.isRequired,
    };
  }

  render() {
    let modalStyle = {
        content: {
            left: "25%",
            right: "25%",
            bottom: null,
            textAlign: "center",
        }
    }

    return (
        <div>
            <Modal style={modalStyle} isOpen={this.props.isDownloadPopupVisible} onRequestClose={this.props.hideDownloadPopup}>
                <div className="download-popup">
                    <p>
                        <div className="spinner-wrapper">
                            <Loader scale={0.5} />
                        </div>
                        Your PDF is being created from this page using phantomjs and should complete in a moment.
                    </p>
                </div>
            </Modal>
        </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    isDownloadPopupVisible: state.popups.isDownloadPopupVisible,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    hideDownloadPopup: () => { dispatch(hideDownloadPopup()) },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DownloadPopup);
