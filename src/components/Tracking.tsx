import styled from "styled-components";
import pack from "../assets/package.png";
import scan from "../assets/scan.svg";

export default function Tracking() {
  return (
    <Section>
      <Img src={pack} />
      <Wrapper>
        <Title>International air shipments</Title>
        <Text>Enter tracking number to see the delivery process</Text>
        <WrapperTwo>
          <Input type="text" placeholder="Tracking number" />
          <Submit>Track</Submit>
        </WrapperTwo>
      </Wrapper>
    </Section>
  );
}

const Section = styled.section`
  max-width: 1440px;
  margin: 0 auto;
  width: 100%;
  padding-top: 140px;
  padding-bottom: 180px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 170px;
  flex-wrap: wrap;
  @media (max-width: 480px) {
    padding: 30px;
    gap: 30px;
  }
`;

const Img = styled.img`
  width: 268px;
`;

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  
  @media (max-width: 480px) {
    width: 100%;

  }
`;

const WrapperTwo = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
  @media (max-width: 850px) {
    flex-direction: column;
  }
  @media (max-width: 480px) {
    flex-direction: row;
    width: 100%;
  }
`;
const Title = styled.h3`
  color: #000;
  text-align: center;
  font-size: 32px;
  font-weight: 400;
  @media (max-width:480px) {
    text-align: left;
  }
`;

const Text = styled.p`
  color: #212121;
  text-align: center;
  font-size: 20px;
  font-weight: 400;
  @media (max-width:480px) {
    text-align: left;
  }
`;

const Input = styled.input`
  width: 430px;
  padding: 16px 8px 16px 40px;
  border-bottom: 1px solid #000;

  background-image: url(${scan});
  background-repeat: no-repeat;
  background-position-x: 8px;
  background-position-y: center;

  &::placeholder {
    color: #b7bcbc;
    font-size: 14px;
    font-weight: 400;
  }
  @media (max-width: 480px) {
    width: 140%;
  }
`;
const Submit = styled.button`
  width: 236px;
  height: 52px;
  border-radius: 48px;
  background: #060707;
  color: #fff;
  font-size: 24px;
  font-weight: 500;
  @media (max-width: 480px) {
    font-size: 14px;
    height: 36px;
  }
`;
