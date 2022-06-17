import React from "react";
import logo from "../assets/Logo.svg";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import { ButtonStyle } from "../utils/styles";
import { Container } from "./Success.styles";
function Success() {
  const navigate = useNavigate();
  const onClickHandler = (e) => {
    navigate("/");
  };
  return (
    <div className="containerSucess">
      <Container>
        <img src={logo} alt="Logo" />
        <ButtonStyle>
          <Button
            className="success"
            text="Go Back!"
            onClickHandler={onClickHandler}
          />
        </ButtonStyle>
      </Container>
    </div>
  );
}

export default Success;
