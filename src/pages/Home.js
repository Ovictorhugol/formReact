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
      console.log("Some information is wrong");
    } else {
      navigate("/success");
    }
  };
  const validation = () => {
    let testPassed = true;
    if (!validName.test(name)) {
      testPassed = false;
      document.getElementById("pName").style.display = "flex";
    } else document.getElementById("pName").style.display = "none";

    if (!validEmail.test(email)) {
      testPassed = false;
      document.getElementById("pEmail").style.display = "flex";
    } else document.getElementById("pEmail").style.display = "none";
    if (!validPhone.test(phone)) {
      testPassed = false;
      document.getElementById("pPhone").style.display = "flex";
    } else document.getElementById("pPhone").style.display = "none";
    if (!validPassword.test(password)) {
      testPassed = false;
      document.getElementById("pPass").style.display = "flex";
    } else document.getElementById("pPass").style.display = "none";

    let year = Number(birthday.substring(0, 4));

    if (!validBirthday.test(birthday) || year < 1901) {
      testPassed = false;
      document.getElementById("pDate").style.display = "flex";
    } else document.getElementById("pDate").style.display = "none";

    if (!check) {
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
            <div className="form">
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
                <div id="FormPhone">
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
                </div>
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
                <div id="FormDate">
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
