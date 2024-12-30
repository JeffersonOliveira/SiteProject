import { useContext } from 'react';
import { BottomContainer, FooterContainer, InfoContainer, InfoContentContainer } from './styles';
import { LanguageContext } from '../../contexts/LanguageContextData';

export function Footer() {
  const Language = useContext(LanguageContext)
  
  return (
    <FooterContainer>
      <InfoContentContainer>
        <InfoContainer>
          <h5>{Language.FirstInfoContainerH5}</h5>
          <span>Lorem</span>
          <span>ipsum</span>
        </InfoContainer>
        <InfoContainer>
          <h5>{Language.SecondInfoContainerH5}</h5>
          <span>Lorem</span>
          <span>ipsum</span>
          <span>dolor</span>
          <span>sit</span>
        </InfoContainer>
        <InfoContainer>
          <h5>{Language.ThirdInfoContainerH5}</h5>
          <span>Lorem</span>
          <span>ipsum</span>
          <span>dolor</span>
          <span>sit</span>
          <span>amet</span>
          <span>consectetur</span>
        </InfoContainer>      
      </InfoContentContainer>
      <BottomContainer>
        <h5>2024 © MyCompanyName</h5>
        <h5>example@fakemail.com</h5>
      </BottomContainer>
    </FooterContainer>
  )
}