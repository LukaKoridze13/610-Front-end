import styled from "styled-components";
import Logo from "./Logo";
import Navigation from "./Navigation";
import menu from "../assets/menu.svg";
export default function Header({ onClick }: {
  onClick: () => void;
}) {
  return (
    <Wrapper>
      <Logo />
      <Navigation />
      <Img className="burger" onClick={onClick} src={menu} alt="menu" />
    </Wrapper>
  );
}

const Wrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;

  padding: 32px;
  border-bottom: 1px solid #b1b1b1;

  @media (max-width: 480px) {
    padding: 24px;
  }
`;

const Img = styled.img`
  width: 30px;
  cursor: pointer;
  @media (min-width: 1025px) {
    display: none;
  }
  @media (max-width: 480px) {
    width: 25px;
  }
`;
