import Header from "../components/Header";
import Main from "../components/Main";
import OnlineStores from "../components/OnlineStores";
import Tracking from "../components/Tracking";
import UnderHeader from "../components/UnderHeader";
import { Website } from "../components/Website";

export default function Home() {
  return (
    <Website>
      <Header />
      <UnderHeader />
      <Main />
      <Tracking />
      <OnlineStores />
    </Website>
  );
}
