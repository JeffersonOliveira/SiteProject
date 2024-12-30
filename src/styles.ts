import styled from "styled-components";
import image from './assets/background.webp'

export const AppContainer = styled.div`
  position: absolute;
  z-index: 1;
  bottom: 0;
  right: 0;
  left: 0;
  top: 0;
`

export const BackgroundContainer = styled.div`
  background-image: url(${image});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top center;
  position: absolute;
  opacity: 45%;
  height: 793px;
  width: 100%;
`

export const ScrollToTopButtonContainer = styled.button`
  height: 48px;
  width: 48px;
  z-index: 2;
  bottom: 15px;
  right: 15px;
  position: fixed;  
  
  background: ${props => props.theme.primaryColor};
  color: ${props => props.theme.invertedTextColor};
  border: none;
  border-radius: 8px;
  opacity: 100%;
  text-align: center;
  line-height: 0;

  cursor: pointer;
  transition: 0.3s;

  @media screen and (min-width: 766px){
    &:hover {
      background: ${props => props.theme.hoverPrimaryColor};
    }    
  }

  &:disabled {
    opacity: 0%;
    visibility: hidden;
  }
  
  &:focus {
    box-shadow: none;
  }
`