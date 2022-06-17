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
  OrderPhone,
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
      document.getElementById("pName").style.display = "flex";
    } else document.getElementById("pName").style.display = "none";

    if (!validEmail.test(email)) {
      console.log("Email Invalido");
      testPassed = false;
      document.getElementById("pEmail").style.display = "flex";
    } else document.getElementById("pEmail").style.display = "none";
    if (!validPhone.test(phone)) {
      console.log("Telefone invalido");
      testPassed = false;
      document.getElementById("pPhone").style.display = "flex";
    } else document.getElementById("pPhone").style.display = "none";
    if (!validPassword.test(password)) {
      console.log("Password Invalido");
      testPassed = false;
      document.getElementById("pPass").style.display = "flex";
    } else document.getElementById("pPass").style.display = "none";

    let year = Number(birthday.substring(0, 4));

    console.log(year);
    if (!validBirthday.test(birthday) || year < 1901) {
      console.log("Data invalida");
      testPassed = false;
      document.getElementById("pDate").style.display = "flex";
    } else document.getElementById("pDate").style.display = "none";

    if (!check) {
      console.log("O checkbox deve estar marcado");
      testPassed = false;
      document.getElementById("pCheck").style.display = "flex";
    } else document.getElementById("pCheck").style.display = "none";

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
                <p id="pName">Fullname invalid</p>
              </div>
              <div id="formPhoneEmail">
                <div>
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
                  <p id="pEmail">Email invalid</p>
                </div>
                <OrderPhone>
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
                  <p id="pPhone">Phone invalid</p>
                </OrderPhone>
              </div>

              <div id="formPasswordDate">
                <div>
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
                  <p id="pPass">Password invalid</p>
                </div>
                <div>
                  <InputDate>
                    <Order>
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
                    </Order>
                  </InputDate>
                  <p id="pDate">Age invalid</p>
                </div>
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
                <p id="pCheck">You must accept the terms</p>
              </div>
              <ButtonStyle>
                <Button
                  className="result"
                  text="Register"
                  onClickHandler={onClickHandler}
                />
              </ButtonStyle>
            </CheckboxButton>
          </FormBody>
        </section>
      </div>
    </HomeContainer>
  );
}

export default Home;
