import styled from "styled-components";
import { Nav, NavItem } from "./Navigation";
import { useNavigate } from "react-router-dom";
export default function UnderHeader({ onClick }: { onClick: () => void }) {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <NavMob>
        <NavItemBold className="calc" onClick={onClick}>Calculator</NavItemBold>
        <NavItemBold>Shop</NavItemBold>
        <NavItemBold>Services</NavItemBold>
        <NavItemBold>Prices</NavItemBold>
      </NavMob>
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
  @media (max-width: 480px) {
    padding: 24px;
  }
`;

const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  @media (max-width: 808px) {
    display: none;
  }
`;

const Login = styled.button`
  padding: 8px 40px;
  border-radius: 24px;
  background: #060707;

  color: #fff;
  font-size: 20px;
  font-weight: 500;
  transition: all 0.3;
  &:hover{
    background: #A91E22;
  }
`;

export const Registration = styled.button`
  color: #060707;
  font-size: 20px;
  font-weight: 500;
  &:hover{
    color: #A91E22;
  }
`;

const NavItemBold = styled(NavItem)`
  font-weight: 500;

  @media (max-width: 480px) {
    font-size: 15px;
  }
  
`;

const NavMob = styled(Nav)`
  @media (max-width: 1024px) {
    display: flex;
  }
  @media (max-width: 808px) {
    width: 100%;
    justify-content: space-between;
    gap: 0px;
  }
`