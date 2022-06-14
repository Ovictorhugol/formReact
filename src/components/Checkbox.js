import React from "react";

function Checkbox(props) {
  const { type } = props;
  return (
    <div>
      <input type={type}></input>
    </div>
  );
}

export default Checkbox;
