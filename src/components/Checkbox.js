import React, { useRef } from "react";

function Checkbox(props) {
  const { type, value, onChange } = props;
  const checkboxRef = useRef();
  return (
    <div>
      <input
        id="checkbox"
        type={type}
        value={value}
        onChange={onChange}
      ></input>
    </div>
  );
}

export default Checkbox;
