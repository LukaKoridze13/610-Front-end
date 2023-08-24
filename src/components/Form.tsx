import styled from "styled-components";
export const Form = styled.form`
  padding: 56px 40px;
  border-radius: 32px;
  background: #fff;
  width: 430px;
  position: relative;
  @media (max-width: 480px) {
    padding: 24px;
    width: 95% !important;
    margin-top: 50px;
  }
`;

export const FormTitle = styled.p`
  color: #000;
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 64px;
  text-align: center;
  @media (max-width: 480px) {
    margin-bottom: 24px;
    font-size: 24px;
  }
`;

export const Label = styled.label`
  color: #070707;
  font-size: 16px;
  font-weight: 400;
  padding-left: 16px;
  display: block;
  cursor: pointer;
  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 16px;
  border-radius: 48px;
  background: white;
  display: block;
  &::placeholder {
    color: #b7bcbc;
    font-size: 14px;
    font-weight: 400;
  }
  &:focus {
    outline: none;
  }
`;

export const Group = styled.div`
  position: relative;
  margin-top: 24px;

  display: flex;
  flex-direction: column;
  gap: 4px;
  &:first-of-type {
    margin-top: 0px;
  }
`;

export const Eye = styled.img`
  position: absolute;
  right: 16px;
  top: 40px;
  cursor: pointer;
`;

export const ForgotPassword = styled.span`
  color: #5f6767;
  text-align: right;
  font-size: 20px;
  font-weight: 400;
  text-decoration-line: underline;
  cursor: pointer;
  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

export const Submit = styled.button`
  width: 100%;
  height: 52px;
  border-radius: 48px;
  background: #060707;
  color: #fff;
  font-size: 24px;
  font-weight: 500;
  margin-top: 64px;
  @media (max-width: 480px) {
    font-size: 18px;
    height: 36px;
    width: 70%;
    margin: 36px auto 0 auto;
    display: block;
  }
`;

export const Registration = styled.button`
  color: #060707;
  font-size: 20px;
  font-weight: 500;
  margin-top: 24px;
  cursor: pointer;

  display: block;
  margin-inline: auto;

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;
