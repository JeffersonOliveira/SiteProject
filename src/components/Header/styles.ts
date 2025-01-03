import styled from "styled-components";
import brazilFlag from '../../assets/Flags/FlagOfBrazil.svg'
import unitedStatesFlag from '../../assets/Flags/FlagOfUnitedStates.svg'
import spainFlag from '../../assets/Flags/FlagOfSpain.svg'

interface LanguageItemType {
  lang?: 'pt' | 'en' | 'es'
}
interface LanguageContainerType {
  colapsed?: boolean
}

export const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 7.27% 0 13.54%;
  gap: 200px;
  background-color: black;
  color: #00A0C1;
  position: fixed;
  z-index: 2;

  box-shadow: rgba(0, 0, 0, 0.25) 0px 5px 8px;

  @media screen and (max-width: 768px) {
    padding: 0 10%;
    flex-direction: column;
    gap: 0.625rem;
  }
`

export const NavbarLogoContainer = styled.div`
  padding: 2.25rem 0;

  @media screen and (max-width: 768px) {
    padding: 1rem 0 0 0;
  }
`
export const NavbarContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  padding: 2.25rem 0;

  @media screen and (max-width: 768px) {
    padding: 0 0  1rem 0;
    flex-direction: column-reverse;
    gap: 0.625rem;
  }
`
export const LogoContainer = styled.img`
  width: 50px;
`
export const NavContainer = styled.nav`
  ul{
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1.3125rem;

    list-style-type: none;
  }

  li {
    @media screen and (min-width: 769px) {
      transition: 0.15s;

      &:hover{
        cursor: pointer;
        color: ${props => props.theme.invertedTextColor};
      }
    }
  }
`

export const LanguageContainer = styled.span<LanguageContainerType>`  
  display: flex;
  gap: 0.75rem;

  @media screen and (min-width: 769px) {
    ${props => {
        if(props.colapsed) {
          return (
            `
            flex-direction: row-reverse;
            `
          )
        } 
        else {
          return (
            `
            flex-direction: row;
            `
          )
        }
    }}  
  }

  ul{    
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.9375rem;
    list-style-type: none;
    

    ${props => {
      if(props.colapsed) {
        return (
          `
          opacity: 0%;
          visibility: hidden;
          `
        )
      } 
      else {
        return (
          `
          transition: 0.5s;
          opacity: 100%;
          visibility: visible;
          `
        )
      }
    }}

    @media screen and (max-width: 768px) {
      width: 100%;
      padding: 0 0 0 2.25rem;
    }
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    align-items: end;
    flex-direction: row-reverse;
  }
`
export const LanguageMenuButton = styled.button`
  background: none;
  border: none;
  border-radius: 8px;
  color: ${props => props.theme.secondaryColor1};
  cursor: pointer;
  height: 25px;
  width: 25px;

  text-align: center;  
  line-height: 1.875rem;

  transition: 0.15s;

  &:focus {
    box-shadow: none;
  }

  @media screen and (min-width: 769px) {
    &:hover {
      color: ${props => props.theme.invertedTextColor};
    }
  }
`
export const LanguageItemContainer = styled.li<LanguageItemType>`
  width: 2.1875rem;
  height: 1.5625rem;
  text-align: center;
  background-color: transparent;
  line-height: 1.5625rem;
  cursor: pointer;
  transition: 0.1s;

  ${props => {
    switch(props.lang){
      case 'pt' : {
        return (
          `
            &:hover {
              color: transparent;              
              background-image: url(${brazilFlag});
              background-repeat: no-repeat;
              background-size: cover;
              background-position: center center;
            }
          `
        )
      }
      case 'en' : {
        return (
          `
            &:hover {
              color: transparent;
              background-image: url(${unitedStatesFlag});
              background-repeat: no-repeat;
              background-size: cover;
              background-position: center center;
            }
          `
        )
      }
      case 'es' : {
        return (
          `
            &:hover {
              color: transparent;
              background-image: url(${spainFlag});
              background-repeat: no-repeat;
              background-size: cover;
              background-position: center center;
            }
          `
        )
      }
    }
  }}
  
  @media screen and (max-width: 768px) {
    ${props => {
    switch(props.lang){
      case 'pt' : {
        return (
          `
          color: transparent;              
          background-image: url(${brazilFlag});
          background-repeat: no-repeat;
          background-size: cover;
          background-position: center center;
          `
        )
      }
      case 'en' : {
        return (
          `
          color: transparent;
          background-image: url(${unitedStatesFlag});
          background-repeat: no-repeat;
          background-size: cover;
          background-position: center center;          
          `
        )
      }
      case 'es' : {
        return (
          `
          color: transparent;
          background-image: url(${spainFlag});
          background-repeat: no-repeat;
          background-size: cover;
          background-position: center center;
          `
        )
      }
    }
  }}
  }
`