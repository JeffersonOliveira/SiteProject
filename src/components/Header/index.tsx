import { useContext, useState } from 'react';
import { LanguageContext } from '../../contexts/LanguageContextData';
import { List, X } from '@phosphor-icons/react';
import Logo from '../../assets/logo.svg';
import {
  HeaderContainer,
  LanguageContainer,
  LanguageItemContainer,
  LanguageMenuButton,
  LogoContainer,
  NavbarContainer,
  NavbarLogoContainer,
  NavContainer,
} from './styles';

interface HeaderType {
  handleScrollIntoView: (reference: string) => void;
  handleChangeLanguage: (lang: string) => void;
}

export function Header({handleScrollIntoView, handleChangeLanguage} : HeaderType) {

  const Language = useContext(LanguageContext)
  const [isCollapsed, setIsCollapsed] = useState(true)

  function ScrollIntoView(event: React.MouseEvent<HTMLLIElement, MouseEvent>) {
    const Id = event.currentTarget.id
    handleScrollIntoView(Id);
  }

  function ChangeLanguage(event: React.MouseEvent<HTMLLIElement, MouseEvent>){
    const lang = event.currentTarget.lang;
    handleChangeLanguage(lang)
  }

  return (
    <HeaderContainer>
      <NavbarLogoContainer>
        <LogoContainer src={Logo}/>
      </NavbarLogoContainer>
      <NavbarContainer>
        <NavContainer>
          <ul>
            <li onClick={ScrollIntoView} id='Experiences'>{Language.NavContainerLiExperiences}</li>
            <li onClick={ScrollIntoView} id='Solutions'>{Language.NavContainerLiSolutions}</li>
            <li onClick={ScrollIntoView} id='Contact'>{Language.NavContainerLiContact}</li>
          </ul>
        </NavContainer>
        <LanguageContainer colapsed={isCollapsed}>          
            <LanguageMenuButton onClick={() => setIsCollapsed(!isCollapsed)}>
              {isCollapsed?
              <List/> :
              <X/>
              }
            </LanguageMenuButton>
          <ul>
            <LanguageItemContainer onClick={ChangeLanguage} lang="pt">Pt</LanguageItemContainer>
            <LanguageItemContainer onClick={ChangeLanguage} lang="en">En</LanguageItemContainer>
            <LanguageItemContainer onClick={ChangeLanguage} lang="es">Es</LanguageItemContainer>
          </ul>          
        </LanguageContainer>
      </NavbarContainer>
    </HeaderContainer>
  )
}