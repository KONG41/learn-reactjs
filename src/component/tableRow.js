import React from "react";
const TableRow = (props) => {
  const trashStyle = {
    color: "red",
    cursor: "pointer",
  };
  const editStyle = {
    color: "#4c6ef5",
    cursor: "pointer",
  };
  return (
    <tr>
      <td>{props.id}</td>
      <td>{props.name}</td>
      <td>{props.qty}</td>
      <td style={trashStyle}>
        <i class="fas fa-trash"></i>
      </td>
      <td style={editStyle}>
        <i class="fas fa-pencil-alt"></i>
      </td>
    </tr>
  );
};
export default TableRow;
