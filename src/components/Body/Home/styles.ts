import styled from "styled-components";

export const HomeContainer = styled.section`
  width: 100%;
  height: 838px; 

  @media screen and (max-width: 768px) {
    height: auto; 
  }
`

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5rem;

  padding: 5rem 0;
`

export const ContentFirstRowConteiner = styled.div`
  width: 100%;
`
export const FirstRowContentConteiner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  
  width: 52%;
  gap: 2.1875rem;

  h1 {
    font-weight: 800;
    font-size: 3.625rem;
    text-align: left;
    white-space: break-spaces;

    @media screen and (max-width: 768px) {
      width: 100%;
      font-size: 2rem;
      text-align: center;
    }
  }

  h4 {
    width: 70%;
    font-weight: 500;
    font-size: 1.25;
    white-space: break-spaces;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    align-items: center;
  }
`
export const FirstRowButtonConteiner = styled.div`
  display: flex;
  align-items: start;
  gap: 0.625rem;

  button {
    border-radius: 37px;
    padding: 0.625rem;
  }

  @media screen and (max-width: 768px) {
    justify-content: space-between;
  }
`
const ButtonBase = styled.button`
  width: 130px;
  text-align: center;
  font-weight: 700;
  font-size: 0.875rem;
  cursor: pointer;
`
export const FirstRowLeftButton = styled(ButtonBase)`
  color: ${props => props.theme.invertedTextColor};
  border: none;
  background: ${props => props.theme.primaryColor};
  transition: 0.3s;

  &:hover {
    background: ${props => props.theme.hoverPrimaryColor};
  }
`
export const FirstRowRightButton = styled(ButtonBase)`
  color: ${props => props.theme.secondaryColor1};
  border: solid 1px ${props => props.theme.secondaryColor1};
  background: ${props => props.theme.backgroundColor};
  transition: 0.3s;

  &:hover {
    color: ${props => props.theme.invertedTextColor};
    background: ${props => props.theme.secondaryColor1};
  }
`

export const ContentSecondRowConteiner = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.875rem;
  

  @media screen and (max-width: 768px) {
    justify-content: center;
    flex-wrap: wrap;
  }
`