import styled from "styled-components";
import back from "../assets/back.svg";
import { useNavigate } from "react-router-dom";
export default function BackToHome({ left }: { left: number }) {
  const navigate = useNavigate();
  return (
    <Button
      $left={left}
      onClick={() => {
        navigate("/");
      }}
    >
      <img src={back} alt="back" /> Back to home
    </Button>
  );
}

const Button = styled.button<{ $left: number }>`
  color: #060707;
  font-size: 20px;
  font-weight: 400;

  display: flex;
  align-items: center;
  gap: 18px;

  position: absolute;
  top: -60px;
  left: ${(props) => props.$left}px;
`;
