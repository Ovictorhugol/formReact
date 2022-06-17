import styled from "styled-components";
export const AppHome = styled.div`
  margin: 0;

  min-width: 100%;
  min-height: 100%;
`;

export const HomeContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;
`;

export const Img = styled.div`
  margin-top: 2em;
`;

export const InputPassword = styled.div`
  width: 14em;
`;

export const FormBody = styled.div`
  background: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 95vh;
  height: 90vh;
  flex-wrap: wrap;
  border-radius: 1.25em;

  #formName Input {
    width: 25em;
  }
  #formPhoneEmail {
    display: flex;
  }
  #formPasswordDate {
    display: flex;
  }
`;
export const Order = styled.div`
  @media (max-width: 768px) {
    order: 2;
  }
`;
export const InputLabel = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CheckboxButton = styled.div`
  display: flex;
  flex-direction: row;
`;

export const TermsAndConditions = styled.div`
  display: flex;
  align-content: center;
`;
