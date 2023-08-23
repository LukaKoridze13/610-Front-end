import styled from "styled-components";
import { Nav, NavItem } from "./Navigation";
import { useNavigate } from "react-router-dom";
export default function UnderHeader() {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <Nav>
        <NavItem>Calculator</NavItem>
        <NavItem>Shop</NavItem>
        <NavItem>Services</NavItem>
        <NavItem>Prices</NavItem>
      </Nav>
      <ButtonsWrapper>
        <Login
          onClick={() => {
            navigate("/login");
          }}
        >
          Log in
        </Login>
        <Registration
          onClick={() => {
            navigate("/signup");
          }}
        >
          Registration
        </Registration>
      </ButtonsWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  padding: 32px;
  max-width: 1440px;
  margin: 0 auto;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
`;

const Login = styled.button`
  padding: 8px 40px;
  border-radius: 24px;
  background: #060707;

  color: #fff;
  font-size: 20px;
  font-weight: 500;
`;

export const Registration = styled.button`
  color: #060707;
  font-size: 20px;
  font-weight: 500;
`;
