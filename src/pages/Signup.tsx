import styled from "styled-components";
import { Eye, Form, FormTitle, Group, Input, Label, Submit } from "../components/Form";
import { useState } from "react";
import eye from "../assets/eye.svg";
import eyehidden from "../assets/eyehidden.svg";
import check from "../assets/check.svg";
import checked from "../assets/checked.svg";
import { useNavigate } from "react-router";
import BackToHome from "../components/BackToHome";
export default function Signup() {
  const [hidden, setHidden] = useState(true);
  const [hidden2, setHidden2] = useState(true);
  const [checkbox, setCheckbox] = useState(true);
  const navigate = useNavigate();
  const handleClick = () => {
    setHidden(!hidden);
  };

  const handleClick2 = () => {
    setHidden2(!hidden2);
  };

  const handleCheck = () => {
    setCheckbox(!checkbox);
  };

  return (
    <Wrapper>
      <Form style={{ width: window.innerWidth > 480 ? "664px" : "100%", background: "#F1F1F1" }}>
      <BackToHome left={window.innerWidth > 480 ? -200 : 40} top={window.innerWidth > 480 ? 0 : -50} />
        <FormTitle>Registration</FormTitle>
        <Whole>
          <Half>
            <Group>
              <Label htmlFor="name">First name</Label>
              <Input type="text" id="name" placeholder="First name" />
            </Group>
            <Group>
              <Label htmlFor="email">Email</Label>
              <Input type="mail" id="email" placeholder="Email" />
            </Group>
            <Group>
              <Label htmlFor="city">City</Label>
              <Input type="text" id="city" placeholder="Tbilii" />
            </Group>
          </Half>
          <Half>
            <Group>
              <Label htmlFor="surname">Last name</Label>
              <Input type="text" id="surname" placeholder="Last name" />
            </Group>
            <Group>
              <Label htmlFor="phone">Phone number</Label>
              <Input type="phone" id="phone" placeholder="+995" />
            </Group>
            <Group>
              <Label htmlFor="city">Address</Label>
              <Input type="text" id="city" placeholder="Tbilii" />
            </Group>
          </Half>
        </Whole>
        <Group>
          <Label htmlFor="password">Password</Label>
          <Input type={hidden ? "password" : "text"} placeholder="Password" id="password" name="password" />
          <Eye src={hidden ? eye : eyehidden} alt="Eye" onClick={handleClick} />
        </Group>
        <Group>
          <Label htmlFor="repass">Confirm password</Label>
          <Input type={hidden2 ? "password" : "text"} placeholder="Confirm password" id="repass" name="repass" />
          <Eye src={hidden2 ? eye : eyehidden} alt="Eye" onClick={handleClick2} />
        </Group>
        <TermsAndConditions>
          <Checkbox src={checkbox ? checked : check} onClick={handleCheck} />
          <Agree onClick={handleCheck}>I agree to the</Agree>
          <Span>terms and conditions</Span>
        </TermsAndConditions>
        <Submit style={{ marginTop: "24px" }}>Register</Submit>
        <Already>
          Already have an account?
          <Login
            onClick={() => {
              navigate("/login");
            }}
          >
            Log in
          </Login>
        </Already>
      </Form>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  min-height: 100dvh;

  padding: 40px;
  padding-top: 200px;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: white;

  @media (max-width: 480px) {
    width: 100%;
    padding: 0px;
    padding-top: 20px;
    padding-bottom: 20px;
  }
`;

const Whole = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
const Half = styled.div`
  width: 46%;
`;

const TermsAndConditions = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 12px;
  margin-top: 64px;
  padding-left: 12px;
`;

const Agree = styled.span`
  color: #000;
  font-size: 20px;
  font-weight: 400;
  cursor: pointer;
  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

const Span = styled.a`
  color: #5f6767;
  font-size: 20px;
  font-weight: 500;
  text-decoration-line: underline;
  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

const Checkbox = styled.img`
  cursor: pointer;
`;

const Already = styled.p`
  color: #656565;
  font-size: 16px;
  font-weight: 400;
  margin-top: 12px;
  text-align: center;
`;

const Login = styled.span`
  color: #0d0d0d;
  font-size: 16px;
  font-weight: 500;
  text-decoration-line: underline;
  margin-left: 8px;
  cursor: pointer;
`;
