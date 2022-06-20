import React from "react";
import { TermsAndConditions } from "../utils/styles";

function Checkbox(props) {
  const { type, value, onChange, label } = props;

  return (
    <div>
      <TermsAndConditions>
        <input
          id="checkbox"
          type={type}
          value={value}
          onChange={onChange}
        ></input>
        <label htmlFor="checkbox">{label}</label>
      </TermsAndConditions>
    </div>
  );
}

export default Checkbox;
