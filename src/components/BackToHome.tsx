import styled from "styled-components";
import back from "../assets/back.svg";
import { useNavigate } from "react-router-dom";
export default function BackToHome({ left, top }: { left: number; top?: number }) {
  const navigate = useNavigate();
  return (
    <Button
      $left={left}
      $top={top}
      onClick={() => {
        navigate("/");
      }}
    >
      <img src={back} alt="back" /> Back to home
    </Button>
  );
}

const Button = styled.button<{ $left: number; $top?: number }>`
  color: #060707;
  font-size: 20px;
  font-weight: 400;

  display: flex;
  align-items: center;
  gap: 18px;

  position: absolute;
  z-index: 10;
  top: ${(props) => props.$top + "px" || -60};
  left: ${(props) => props.$left}px;
`;
