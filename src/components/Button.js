import React from "react";

function Button(props) {
  const onClickHandler = (e) => {
    console.log(e.target.value);
  };
  return (
    <div>
      <button type="submit" onClick={onClickHandler}>
        {props.text}
      </button>
    </div>
  );
}

export default Button;
