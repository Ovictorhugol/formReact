import React from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import Checkbox from "../components/Checkbox";
import logo from "../assets/Logo.svg";
function Home() {
  return (
    <div>
      <img src={logo} alt="Logo" />
      <Input type="text" label="Full Name" placeholder="Name" />
      <Input type="email" label="Email" placeholder="foo@bar.com" />
      <Input type="phone" label="Phone" placeholder="(83)00000-0000" />
      <Input type="password" label="Password" placeholder="" />
      <Input type="date" label="Birthday" placeholder="" />
      <Checkbox type="checkbox" />
      <Button text="Register" />
    </div>
  );
}

export default Home;
