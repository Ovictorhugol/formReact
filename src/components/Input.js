import React from "react";
import { InputLabel } from "../utils/styles";

function Input(props) {
  const { type, placeholder, label, value, onChange, lenght } = props;

  return (
    <div>
      <InputLabel>
        <label>{label}</label>
        <input
          type={type}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          maxLength={lenght}
        ></input>
      </InputLabel>
    </div>
  );
}

export default Input;
