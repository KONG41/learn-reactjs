import { React } from "react";
const TableHeader = (props) => {
  return (
    <tr>
      <th>{props.name1}</th>
      <th>{props.name2}</th>
      <th>{props.name3}</th>
    </tr>
  );
};
export default TableHeader;
