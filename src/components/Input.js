import React from "react";
import { InputLabel } from "../utils/styles";

function Input(props) {
  const { id, type, placeholder, label, value, onChange, lenght } = props;

  return (
    <div>
      <InputLabel>
        <label for={id}>{label}</label>
        <input
          id={id}
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
