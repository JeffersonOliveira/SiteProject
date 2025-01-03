import styled from "styled-components";

export const SliderContainer = styled.section`
  width: 100%;
  height: 339px;

  display: flex;
  justify-content: center;
  align-items: center;

  .swiper-slide {
    display: flex;
    justify-content: center;    
  }

  .googleCert {
    height: 203px;
  }

  @media screen and (max-width: 768px) {
    img {
      width: 100%;
    }    
  }
`