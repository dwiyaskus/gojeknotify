import React from "react";
import { mainStyle } from "./modalStyle";
class ModalMessage extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
      <div
        style={{
          ...mainStyle.outerStyle,
          display: this.props.isModalOpen ? "block" : "none"
        }}
      >
        <div style={mainStyle.overlay} onClick={this.props.closeModal} />
        <div onClick={this.props.closeModal} />
        <div style={mainStyle.modal}>{this.props.children}</div>
      </div>
    );
  }
}

export default ModalMessage;
