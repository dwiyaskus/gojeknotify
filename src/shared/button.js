import React from "react";
const MainPage = props => (
  <button style={props.style} onClick={props.onClick}>
    {props.content}
  </button>
);
export default MainPage;
