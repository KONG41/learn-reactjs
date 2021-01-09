import React from "react";
const Header = (props) => {
  return (
    <div className={props.className}>
      <h1>{props.name}</h1>
      <p>{props.detail}</p>
    </div>
  );
};
export default Header;
