import styled from "styled-components";
import Logo from "./Logo";
import Navigation from "./Navigation";

export default function Header() {
  return (
    <Wrapper>
      <Logo />
      <Navigation />
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
`;
