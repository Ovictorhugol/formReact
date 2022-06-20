import React from "react";

function Button(props) {
  const { text, onClickHandler, className } = props;

  return (
    <div>
      <button
        className={className}
        id="button"
        type="submit"
        onClick={onClickHandler}
      >
        {text}
      </button>
    </div>
  );
}

export default Button;
