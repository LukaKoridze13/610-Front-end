import styled from "styled-components";
import phone from "../assets/phone.svg";
import usa from "../assets/usa.png";
import arrowdown from "../assets/arrowdown.svg";
import { useNavigate } from "react-router";

export default function Navigation({ closeMenu }: { closeMenu: () => void }) {
    const navigate = useNavigate()
  return (
    <Nav>
      <CloseButton onClick={closeMenu}>x</CloseButton>
      <NavItem>Home</NavItem>
      <NavItem>About us</NavItem>
      <NavItem>FAQs</NavItem>
      <NavItem>Contact</NavItem>
      <NavItem>Terms</NavItem>
      <NavItem>
        <img src={phone} alt="phone icon" />
        <span>+995 552 342 657</span>
      </NavItem>
      <NavItem>
        <img src={usa} alt="usa flag" />
        <span>EN</span>
        <img src={arrowdown} alt="arrow down" />
      </NavItem>
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
    </Nav>
  );
}
export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 16px;

  width: 100%;
  height: 100dvh;
  background-color: #f9f9f9;

  position: relative;
`;

export const NavItem = styled.span`
  color: #000;
  font-size: 20px;
  font-weight: 400;
  cursor: pointer;

  display: flex;
  align-items: center;
  gap: 8px;
`;

const CloseButton = styled.button`
  font-size: 18px;
  font-weight: bold;

  position: absolute;
  top: 32px;
  right: 32px;

  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: black;
  color: #f9f9f9;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 24px;
  margin-top: 34px;
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