import React, { Component } from "react";
import TableList from "../tableList/";
import ModalMessage from "../modalMessage/";
import Button from "../shared/button";
import { mainStyle } from "../tableList/tableListStyle";

class MainPage extends Component {
  constructor(props) {
    super(props);
    // set initial state
    this.state = {
      isModalOpen: false,
      textArea: ""
    };
  }
  // close modal (set isModalOpen, true)
  closeModal = () => {
    this.setState({
      isModalOpen: false
    });
  };
  // open modal (set isModalOpen, false)
  openModal = () => {
    this.setState({
      isModalOpen: true
    });
  };
  onChange = e => {
    let { textArea } = this.state;
    textArea = e.target.value;
    this.setState({ textArea });
  };
  onClickSend = () => {
    let { textArea } = this.state;
    alert(textArea);
  };
  render() {
    let { textArea } = this.state;
    return (
      <div className="App">
        <TableList openModal={this.openModal} />
        <div style={mainStyle.app}>
          <ModalMessage
            isModalOpen={this.state.isModalOpen}
            closeModal={this.closeModal}
            style={mainStyle.overlay}
          >
            <textarea
              style={mainStyle.textArea}
              placeholder="Message Here..."
              onChange={this.onChange}
              value={textArea}
            />
            <Button
              style={{
                ...mainStyle.button,
                margin: 0,
                width: "auto",
                marginTop: 10,
                backgroundColor: "	#FF0000"
              }}
              onClick={this.closeModal}
              content="Cancel"
            />
            <Button
              style={{
                ...mainStyle.button,
                margin: 0,
                width: "auto",
                marginTop: 10,
                backgroundColor: "#228B22"
              }}
              onClick={this.onClickSend}
              content="Send"
            />
          </ModalMessage>
        </div>
      </div>
    );
  }
}

export default MainPage;
