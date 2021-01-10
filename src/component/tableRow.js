import React from "react";
const TableRow = ({ id, name, qty, setData, data, tableRow }) => {
  const trashStyle = {
    color: "red",
    cursor: "pointer",
  };
  const editStyle = {
    color: "#4c6ef5",
    cursor: "pointer",
  };
  const deleteBtn = () => {
    setData(data.filter((el) => el.id !== tableRow.id)); //មានន័យថាវាset data ថ្មី ដែលdata យកចេញពីarrayទាំងអស់ហើយដក​data​របស់ tableRow.id ចេញ
    // console.log(data.filter((el) => el.name.includes("k")));
  };
  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{qty}</td>
      <td style={trashStyle}>
        <i onClick={deleteBtn} class="fas fa-trash"></i>
      </td>
      <td style={editStyle}>
        <i class="fas fa-pencil-alt"></i>
      </td>
    </tr>
  );
};
export default TableRow;
