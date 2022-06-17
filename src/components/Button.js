import React from "react";

function Button(props) {
  const { text, onClickHandler } = props;

  return (
    <div>
      <button type="submit" onClick={onClickHandler}>
        {text}
      </button>
    </div>
  );
}

export default Button;
