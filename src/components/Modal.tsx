import { ReactNode, useEffect } from "react";
import { styled } from "styled-components";
interface Props {
  children: ReactNode;
  closeModal: () => void;
  modal: boolean;
}

export default function Modal({ children, closeModal, modal }: Props) {
  const stopEvent = (event: Event) => {
    event.preventDefault();
  };
  function onClick(event: Event) {
    if (modal) {
      const clickedElement = event.target as HTMLElement;
      const formElement = document.querySelector("#calculator") as HTMLFormElement;
      if (clickedElement && formElement) {
        if (!isElementInForm(clickedElement, formElement) && !clickedElement.classList.contains("calc") && !clickedElement.classList.contains("burger")) {
          closeModal();
        }
      }
    }
  }

  function isElementInForm(element: HTMLElement, form: HTMLFormElement) {
    return form.contains(element);
  }

  useEffect(() => {
    window.addEventListener("click", onClick);
    window.addEventListener("wheel", stopEvent, { passive: false });
    window.addEventListener("touchmove", stopEvent, { passive: false });
    window.addEventListener("scroll", stopEvent, { passive: false });

    return () => {
      window.removeEventListener("click", onClick);
      window.removeEventListener("wheel", stopEvent);
      window.removeEventListener("touchmove", stopEvent);
      window.removeEventListener("scroll", stopEvent);
    };
  });
  return <Wrapper>{children}</Wrapper>;
}

const Wrapper = styled.div`
  width: 100%;
  min-height: 100dvh;
  background-color: rgba(0, 0, 0, 0.5);
  /* backdrop-filter: blur(2px); */
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10000;

  display: flex;
  justify-content: center;
  align-items: center;
`;
