//import React, { Component } from "react";
import React, { useState, useEffect } from "react";
import TableList from "../tableList/";
import ModalMessage from "../modalMessage/";
import Button from "../shared/button";
import { mainStyle } from "../tableList/tableListStyle";

const MainPage = () => {
  const [data, setData] = useState([]);
  const [isModalOpen, setisModalOpen] = useState(false);
  const [textArea, setTextare] = useState("");
  useEffect(() => {
    console.log("Component Did Mount.....");
    let data = [
      {
        id: 1,
        name: "John Doe",
        phone: "+62888888888",
        email: "john@gmail.com",
        suspended: 0
      },
      {
        id: 2,
        name: "Jane Doe",
        phone: "+62888888887",
        email: "jane@gmail.com",
        suspended: 1
      }
    ];
    setData(data);
  }, []);
  const changeValue = event => {
    const charId = event.target.value;
    setTextare(charId);
  };

  const handleModalClose = () => {
    setisModalOpen(false);
  };
  const handleModalOpen = () => {
    setisModalOpen(true);
  };

  const onClickSend = () => {
    alert(textArea);
    handleModalClose();
  };
  return (
    <React.Fragment>
      <TableList openModal={handleModalOpen} data={data} />
      <React.Fragment style={mainStyle.app}>
        <ModalMessage
          isModalOpen={isModalOpen}
          closeModal={handleModalClose}
          style={mainStyle.overlay}
        >
          <textarea
            style={mainStyle.textArea}
            placeholder="Message Here..."
            onChange={changeValue}
            value={textArea}
          />
          <Button
            style={{
              ...mainStyle.button,
              margin: 0,
              width: "auto",
              marginTop: 10,
              marginLeft: 300,
              backgroundColor: "	#FF0000"
            }}
            onClick={handleModalClose}
            content="Cancel"
            id="cancel"
          />
          <Button
            style={{
              ...mainStyle.button,
              margin: 0,
              width: "auto",
              marginTop: -40,
              marginLeft: 400,
              backgroundColor: "#228B22"
            }}
            onClick={onClickSend}
            content="Send"
            id="send"
          />
        </ModalMessage>
      </React.Fragment>
    </React.Fragment>
  );
};

export default MainPage;
