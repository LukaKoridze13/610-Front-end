import styled from "styled-components";
import arrow from "../assets/arrow.svg";
import store1 from "../assets/store1.png";
import store2 from "../assets/store2.png";
import store3 from "../assets/store3.png";
import store4 from "../assets/store4.png";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
export default function OnlineStores() {
  return (
    <Section>
      <Wrapper>
        <Div>
          <Title>Best online stores</Title>
          <Text>These stores are the most popular among our users. Huge selection, reasonable prices with a lot of discounts and sales - everything you need for the easy and convenient shopping.</Text>
        </Div>
        <ShowMore>
          <span>Show more</span>
          <img src={arrow} alt="Arrow" />
        </ShowMore>
      </Wrapper>
      <StoresWrapper>
        <Swiper spaceBetween={window.innerWidth < 481 ? 1 : 5} slidesPerView={window.innerWidth < 481 ? 1.5 : 3.5}>
          <SwiperSlide style={{ cursor: "pointer" }}>
            <Img src={store1} alt="store" />
          </SwiperSlide>
          <SwiperSlide style={{ cursor: "pointer" }}>
            <Img src={store2} alt="store" />
          </SwiperSlide>
          <SwiperSlide style={{ cursor: "pointer" }}>
            <Img src={store3} alt="store" />
          </SwiperSlide>
          <SwiperSlide style={{ cursor: "pointer" }}>
            <Img src={store4} alt="store" />
          </SwiperSlide>
          <SwiperSlide style={{ cursor: "pointer" }}>
            <Img src={store1} alt="store" />
          </SwiperSlide>
          <SwiperSlide style={{ cursor: "pointer" }}>
            <Img src={store2} alt="store" />
          </SwiperSlide>
          <SwiperSlide style={{ cursor: "pointer" }}>
            <Img src={store3} alt="store" />
          </SwiperSlide>
          <SwiperSlide style={{ cursor: "pointer" }}>
            <Img src={store4} alt="store" />
          </SwiperSlide>
        </Swiper>
      </StoresWrapper>
    </Section>
  );
}

const Section = styled.section`
  width: 100%;
  padding: 80px 72px 160px 72px;
  background: #f3f3f3;

  @media (max-width: 480px) {
    padding: 24px;
  }
`;

const Title = styled.h3`
  color: #000;
  font-size: 36px;
  font-weight: 500;
  @media (max-width: 480px) {
    font-size: 24px;
    white-space: nowrap;
    width: 100%;
  }
`;

const Text = styled.p`
  color: #000;
  font-size: 20px;
  font-weight: 400;
  max-width: 700px;
  margin-top: 16px;
  @media (max-width: 480px) {
    width: 100%;
  }
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  justify-content: space-between;
  align-items: flex-end;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 24px;
  }
`;

const Div = styled.div``;

const ShowMore = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;

  color: #000;
  font-size: 20px;
  font-weight: 500;

  cursor: pointer;
`;

const StoresWrapper = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  height: 180px;

  position: relative;
  overflow: hidden;

  margin-top: 40px;
`;

const Img = styled.img`
  width: 22vw;
  max-width: 250px;
  @media (max-width:480px) {
    width: 50vw;
  }
`;
