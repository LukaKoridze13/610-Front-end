import styled from "styled-components";
import phone from "../assets/phone.svg";
import usa from "../assets/usa.png";
import arrowdown from "../assets/arrowdown.svg";

export default function Navigation() {
  return (
    <Nav>
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
    </Nav>
  );
}

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 40px;
  @media (max-width: 1140px) {
    gap: 26px;
  }
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
