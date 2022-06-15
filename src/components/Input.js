import React, { InputHTMLAttributes } from "react";
import { getData } from "../utils/hooks";

function Input(props) {
  const { type, placeholder, label, value, onChange } = props;
  // const [search, setSearch] = useState("");
  // const onClickHandler = (event) => {
  //   setSearch(event.target.value);
  // };
  // useEffect(() => {
  //   getData(type);
  //   localStorage.setItem(type, search);
  // });
  return (
    <div>
      <label>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      ></input>
      {/* <p>{search}</p> */}
    </div>
  );
}

export default Input;
