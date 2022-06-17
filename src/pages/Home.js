import React, { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import Checkbox from "../components/Checkbox";
import logo from "../assets/Logo.svg";
import {
  validName,
  validPhone,
  validEmail,
  validPassword,
  validBirthday,
} from "../utils/regex";
import {
  HomeContainer,
  Img,
  ImgP,
  FormBody,
  Order,
  CheckboxButton,
  InputPhone,
  InputEmail,
  InputDate,
  InputPassword,
  ButtonStyle,
} from "../utils/styles";
import { useNavigate } from "react-router-dom";
function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [birthday, setBirthday] = useState("");
  const [check, setCheck] = useState(false);
  const navigate = useNavigate();
  const onClickHandler = (event) => {
    event.preventDefault();

    if (!validation()) {
      console.log(name, email, phone, password, birthday, check);
    } else {
      navigate("/success");
    }
  };
  const validation = () => {
    let testPassed = true;
    if (!validName.test(name)) {
      console.log("Nome invalido");
      testPassed = false;
    }

    if (!validEmail.test(email)) {
      console.log("Email Invalido");
      testPassed = false;
    }
    if (!validPhone.test(phone)) {
      console.log("Telefone invalido");
      testPassed = false;
    }
    if (!validPassword.test(password)) {
      console.log("Password Invalido");
      testPassed = false;
    }
    if (!validBirthday.test(birthday)) {
      console.log("Data invalida");
      testPassed = false;
    }
    if (!check) {
      console.log("O checkbox deve estar marcado");
      testPassed = false;
    }

    return testPassed;
  };

  return (
    <HomeContainer>
      <div className="formBody">
        <section>
          <FormBody>
            <Img>
              <img src={logo} alt="Logo" />
              <ImgP>
                <p>Intern Sing up</p>
              </ImgP>
            </Img>
            <div>
              <div id="formName">
                <Input
                  id="name"
                  type="text"
                  label="Full Name"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </div>
              <div id="formPhoneEmail">
                <InputEmail>
                  <Input
                    id="email"
                    type="email"
                    label="Email"
                    placeholder="foo@bar.com"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </InputEmail>
                <InputPhone>
                  <Input
                    id="phone"
                    type="phone"
                    label="Phone"
                    placeholder="(83)00000-0000"
                    value={phone}
                    lenght={11}
                    onChange={(e) => {
                      setPhone(e.target.value);
                    }}
                  />
                </InputPhone>
              </div>

              <div id="formPasswordDate">
                <InputPassword>
                  <Input
                    id="password"
                    type="password"
                    label="Password"
                    placeholder=""
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                </InputPassword>
                <InputDate>
                  <Input
                    id="birthday"
                    type="date"
                    label="Birthday"
                    placeholder=""
                    value={birthday}
                    onChange={(e) => {
                      setBirthday(e.target.value);
                    }}
                  />
                </InputDate>
              </div>
            </div>
            <CheckboxButton>
              <div className="checkbox">
                <Checkbox
                  type="checkbox"
                  value={check}
                  label="I accept the terms and privacy"
                  onChange={(e) => {
                    setCheck(e.target.checked);
                  }}
                />
              </div>
              <Button text="Register" onClickHandler={onClickHandler} />
            </CheckboxButton>
          </FormBody>
        </section>
      </div>
    </HomeContainer>
  );
}

export default Home;
