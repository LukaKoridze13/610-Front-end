import styled from "styled-components";
import logo from "../assets/logo.png";

export default function Logo() {
  return <Img src={logo} alt="Company logo" />;
}

const Img = styled.img`
  width: 200px;
`;
