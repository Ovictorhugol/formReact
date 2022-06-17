import React from "react";
import { ButtonStyle } from "../utils/styles";
function Button(props) {
  const { text, onClickHandler } = props;

  return (
    <div>
      <ButtonStyle>
        <button type="submit" onClick={onClickHandler}>
          {text}
        </button>
      </ButtonStyle>
    </div>
  );
}

export default Button;
