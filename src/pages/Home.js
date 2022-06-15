import React, { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import Checkbox from "../components/Checkbox";
import logo from "../assets/Logo.svg";
function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [birthday, setBirthday] = useState("");
  const [check, setCheck] = useState(false);
  const onClickHandler = (event) => {
    event.preventDefault();
    console.log(name, email, phone, password, birthday, check);
  };
  return (
    <div>
      <img src={logo} alt="Logo" />
      <form>
        <Input
          type="text"
          label="Full Name"
          placeholder="Name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <Input
          type="email"
          label="Email"
          placeholder="foo@bar.com"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <Input
          type="phone"
          label="Phone"
          placeholder="(83)00000-0000"
          value={phone}
          onChange={(e) => {
            setPhone(e.target.value);
          }}
        />
        <Input
          type="password"
          label="Password"
          placeholder=""
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <Input
          type="date"
          label="Birthday"
          placeholder=""
          value={birthday}
          onChange={(e) => {
            setBirthday(e.target.value);
          }}
        />
        <Checkbox
          type="checkbox"
          value={check}
          onChange={(e) => {
            setCheck(e.target.checked);
          }}
        />
        <Button text="Register" onClickHandler={onClickHandler} />
      </form>
    </div>
  );
}

export default Home;
