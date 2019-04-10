import React from "react";
const MainPage = props => (
  <button style={props.style} onClick={props.clicked}>
    {props.content}
  </button>
);
export default MainPage;
