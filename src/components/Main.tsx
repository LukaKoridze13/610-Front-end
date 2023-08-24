import styled from "styled-components";
import { Eye, ForgotPassword, Form, FormTitle, Group, Input, Label, Registration, Submit } from "./Form";
import { useState } from "react";
import eye from "../assets/eye.svg";
import eyehidden from "../assets/eyehidden.svg";
import Boxes from "./Boxes";
import { useNavigate } from "react-router-dom";
import van from "../assets/van.png";
export default function Main({ onClick }: { onClick: () => void }) {
  const navigate = useNavigate();

  const [hidden, setHidden] = useState(true);

  const handleClick = () => {
    setHidden(!hidden);
  };

  return (
    <Section>
      <Flex>
        <Form
          style={{
            boxShadow: "0px 0px 12px 2px rgba(0,0,0,0.2)",
          }}
        >
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
        <Wrapper>
          <Title>International air shipments</Title>
          <Paragraph>We provide transportation of any difficulty item from your shipping address to the desired location, also exporting your product to worldwide locations. Spacecargo offers parcel and cargo transportation from China, America, Dubai, Turkey and Hong Kong. Postal address with room number.</Paragraph>
          <Img src={van} alt="Van" />
        </Wrapper>
      </Flex>

      <Boxes onClick={onClick} />
    </Section>
  );
}

const Section = styled.section`
  width: 100%;
  height: 933px;
  padding: 48px;
  padding-bottom: 200px;

  background: radial-gradient(50% 50% at 50% 50%, rgba(224, 81, 85, 0.2) 0%, rgba(170, 32, 36, 0) 100%);
  background-size: 100% 826px;
  background-repeat: no-repeat;
  background-position-x: left;

  padding-inline: calc(50% - 720px + 32px);

  @media (max-width: 1440px) {
    padding-inline: 32px;
  }
  @media (max-width: 1160px) {
    height: fit-content;
    padding-bottom: 24px;
  }
  @media (max-width: 480px) {
    padding: 24px;
  }
`;

const Title = styled.h2`
  color: #060707;
  font-size: 36px;
  font-weight: 500;
  @media (max-width: 480px) {
    font-size: 24px;
  }
`;

const Paragraph = styled.p`
  color: #060707;
  font-size: 20px;
  font-weight: 400;
  margin-top: 16px;
  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

const Wrapper = styled.div`
  width: 45%;
  max-width: 664px;
  @media (max-width: 1150px) {
    max-width: none;
    width: 80%;
  }
`;
const Flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 120px;
  @media (max-width: 1150px) {
    gap: 60px;
    flex-direction: column;
  }
`;

const Img = styled.img`
  display: block;
  margin-left: auto;
  margin-top: 40px;
  @media (max-width: 1160px) {
    width: 70%;
    margin-inline: auto;
  }

  @media (max-width: 480px) {
    width: 80%;
    margin-inline: auto;
  }
`;
