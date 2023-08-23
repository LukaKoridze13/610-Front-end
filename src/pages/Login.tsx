import styled from "styled-components";
import eye from "../assets/eye.svg";
import eyehidden from "../assets/eyehidden.svg";
import { Form, FormTitle, Group, Label, Input, Eye, ForgotPassword, Submit, Registration } from "../components/Form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BackToHome from "../components/BackToHome";

export default function Login() {
  const [hidden, setHidden] = useState(true);
  const navigate = useNavigate();
  const handleClick = () => {
    setHidden(!hidden);
  };

  return (
    <Wrapper>
      <BackToHome left={-200} />
      <Form style={{ background: "#F1F1F1" }}>
        <FormTitle>Log in</FormTitle>
        <Group>
          <Label htmlFor="email">Email</Label>
          <Input type="mail" placeholder="Email" id="email" name="email" />
        </Group>
        <Group>
          <Label htmlFor="password">Password</Label>
          <Input type={hidden ? "password" : "text"} placeholder="Password" id="password" name="password" />
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
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  min-height: 100dvh;

  padding: 40px;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: white;
`;
