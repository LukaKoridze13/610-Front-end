import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Main from "../components/Main";
import Modal from "../components/Modal";
import OnlineStores from "../components/OnlineStores";
import Tracking from "../components/Tracking";
import UnderHeader from "../components/UnderHeader";
import { Website } from "../components/Website";
import Calculator from "../components/Calculator";
import NavigationMobile from "../components/NavigationMobile";

export default function Home() {
  const [modal, setModal] = useState(false);
  const [menu, setMenu] = useState(false);

  return (
    <Website style={{ height: modal ? "100dvh" : "auto" }}>
      {modal && (
        <Modal
          modal={modal}
          closeModal={() => {
            setModal(false);
          }}
        >
          <Calculator
            onClick={() => {
              setModal(false);
            }}
          />
        </Modal>
      )}
      {menu && (
        <Modal
          modal={menu}
          closeModal={() => {
            setMenu(false);
          }}
        >
          <NavigationMobile closeMenu={()=>{setMenu(false)}} />
        </Modal>
      )}
      <Header onClick={() => setMenu(true)} />
      <UnderHeader onClick={() => setModal(true)} />
      <Main onClick={() => setModal(true)} />
      <Tracking />
      <OnlineStores />
      <Footer />
    </Website>
  );
}
