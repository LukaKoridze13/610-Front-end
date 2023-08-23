import styled from "styled-components";
import payment from "../assets/payment.png";
import calculator from "../assets/calculator.png";
import delivery from "../assets/delivery.png";
import repack from "../assets/repack.png";
export default function Boxes() {
  return (
    <Wrapper>
      <Box>
        <Icon src={payment} alt="Payment" />
        <Span>Payment</Span>
      </Box>
      <Box>
        <Icon src={calculator} alt="Calculator" />
        <Span>Calculator</Span>
      </Box>
      <Box>
        <Icon src={repack} alt="Box" />
        <Span>Repack</Span>
      </Box>
      <Box>
        <Icon src={delivery} alt="Deliery" />
        <Span>Delivery</Span>
      </Box>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 56px;

  width: 100%;
  margin-top: 88px;
`;

const Box = styled.div`
  width: 220px;
  height: 214px;
  border-radius: 16px;
  background: #fff;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 16px;

  box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.25);

`;

const Icon = styled.img`
  width: 72px;
  height: 72px;
`;

const Span = styled.span`
  color: #a91e22;
  text-align: center;
  font-size: 20px;
  font-weight: 500;
`;
