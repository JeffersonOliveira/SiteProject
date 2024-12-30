import styled from "styled-components";

export const FooterContainer = styled.footer`
  width: 100%;
  height: 368px;
  padding: 2.8125rem 0 0 0;

  background: ${props => props.theme.invertedBackgroundColor};
  color: ${props => props.theme.invertedTextColor};

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;

  @media screen and (max-width: 768px) {
    height: auto;
  }
`

export const InfoContentContainer = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: start;
  gap: 3.75rem;
  
  padding: 0 13.54%;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 0 5% 5% 5%;
    align-items: start;
    gap: 1.875rem;
  }
`
export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 0.5rem;

  h5 {
    font-weight: 700;
    font-size: 1rem;
  }

  span {
    font-weight: 400;
    font-size: 0.875rem;
  }  
`

export const BottomContainer = styled.div`
  width: 100%;
  height: 75px;
  padding: 0 13.54%;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.9375rem;

  background: ${props => props.theme.secondaryColor2};

  h5 {
    font-weight: 700;
    font-size: 0.875rem;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
    padding: 2% 5%;
    text-align: center;
    gap: 0;
  }
`