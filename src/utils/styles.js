import styled from "styled-components";

export const HomeContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1em;
  width: 100%;
  height: 100%;
`;

export const Img = styled.div`
  margin-top: 1em;
`;

export const ImgP = styled.p`
  font-family: "Inter", sans-serif;
  text-align: center;
  font-size: 1.25em;
`;

export const FormBody = styled.div`
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 95vh;
  height: 90vh;
  flex-wrap: wrap;
  border-radius: 1.25em;
  font-family: "Nunito", sans-serif;

  #formName {
    width: 28em;
    margin-bottom: 1em;
    font-size: 0.8em;
  }
  #formPhoneEmail {
    display: flex;
    margin-bottom: 1em;
    font-size: 0.8em;
  }
  #formPasswordDate {
    display: flex;
    margin-bottom: 1em;
    font-size: 0.8em;
  }
  @media (max-width: 768px) {
    #formName {
      margin-bottom: 0em;
    }
    #formPhoneEmail {
      margin-bottom: 0em;
    }
    #formPasswordDate {
      margin-bottom: 0em;
    }
  }
`;
export const InputEmail = styled.div`
  width: 19em;
`;
export const InputPhone = styled.div`
  width: 8em;
  margin-left: 1em;
  order: 2;
`;
export const InputPassword = styled.div`
  width: 19em;
`;
export const InputDate = styled.div`
  width: 8em;
  margin-left: 1em;
`;

export const InputLabel = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CheckboxButton = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 1em;
  .checkbox {
    margin-right: 5em;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    margin-top: 0em;
    .checkbox {
      align-content: flex-start;
      margin-right: 10em;
      margin-bottom: 1em;
    }
  }
`;

export const ButtonStyle = styled.button`
  background: #0dbdbd;
  border: 0;
  border-radius: 0.625em;
  color: white;
  width: 6em;
  height: 2em;
  &.success {
    width: 15em;
    height: 7em;
  }
  @media (max-width: 768px) {
    width: 23em;
    height: 3em;
  }
`;

export const TermsAndConditions = styled.div`
  display: flex;
  align-content: center;
  accent-color: #0dbdbd;
  font-size: 0.8em;
`;
