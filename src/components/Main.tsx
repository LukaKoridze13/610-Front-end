import styled from "styled-components";
import { Eye, ForgotPassword, Form, FormTitle, Group, Input, Label, Registration, Submit } from "./Form";
import { useState } from "react";
import eye from "../assets/eye.svg";
import eyehidden from "../assets/eyehidden.svg";
import Boxes from "./Boxes";
import background from "../assets/background.jpg";
import { useNavigate } from "react-router-dom";
export default function Main() {
  const navigate = useNavigate();

  const [hidden, setHidden] = useState(true);

  const handleClick = () => {
    setHidden(!hidden);
  };

  return (
    <Section>
      <Form>
        <FormTitle>Log in</FormTitle>
        <Group>
          <Label htmlFor="email">Email</Label>
          <Input style={{ background: "#f1f1f1" }} type="mail" placeholder="Email" id="email" name="email" />
        </Group>
        <Group>
          <Label htmlFor="password">Password</Label>
          <Input style={{ background: "#f1f1f1" }} type={hidden ? "password" : "text"} placeholder="Password" id="password" name="password" />
          <Eye src={hidden ? eye : eyehidden} alt="Eye" onClick={handleClick} />
          <ForgotPassword>Forgot password?</ForgotPassword>
        </Group>
        <Submit>Log In</Submit>
        <Registration
          onClick={() => {
            navigate("/signup");
          }}
        >
          Registration
        </Registration>
      </Form>
      <Boxes />
    </Section>
  );
}

const Section = styled.section`
  width: 100%;
  height: 933px;
  padding: 48px;
  padding-bottom: 200px;

  background: url(${background});
  background-size: auto 826px;
  background-repeat: no-repeat;
  background-position-x: left;

  padding-inline: calc(50% - 720px + 32px);

  @media (max-width: 1660px) {
    background-position-x: -200px;
  }

  @media (max-width: 1440px) {
    padding-inline: 32px;
    background-position-x: -400px;
  }
`;
