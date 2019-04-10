import React from "react";
import { mainStyle } from "./tableListStyle";
import Button from "../shared/button";
const headerTable = ["ID", "Name", "Phone", "Email", "Susspended", "Action"];
const data = [
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
const TableTourGuide = props => (
  <table id="customers">
    <tr>
      {headerTable.map((headTableContent, index) => {
        return <th key={index}>{headTableContent}</th>;
      })}
    </tr>
    {data.map((data, index) => {
      return (
        data.suspended === 1 && (
          <tr>
            <td>{data.id}</td>
            <td>{data.name}</td>
            <td>{data.phone}</td>
            <td>{data.email}</td>
            <td>{data.suspended === 1 && "YES"}</td>
            <td>
              <Button
                style={{
                  ...mainStyle.button,
                  backgroundColor: "#408cec"
                }}
                onClick={props.openModal}
                content="Notify"
              />
            </td>
          </tr>
        )
      );
    })}
  </table>
);
export default TableTourGuide;
