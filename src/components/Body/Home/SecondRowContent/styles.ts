import styled from "styled-components";

interface SecondRowContentType {
  background: string;
  textcolor?: string;
}

export const SecondRowContentConteiner = styled.div<SecondRowContentType>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 0.625rem;

  width: 30%;
  padding: 2.1875rem 2.5rem;

  box-shadow: rgba(0, 0, 0, 0.25) 0px 5px 8px;

  h3 {
    text-align: start;
  }

  ${props => { 
    if(props.background == 'white') {
      return (
        `
          background-color: ${props.theme.backgroundColor};
          
          span {
            color: ${props.theme.secondaryColor1}
          }
          
          p {
            color: ${props.theme.secondtextColor}
          }
        `
      )
    } else
    if(props.background == 'blue') {
      return (
        `
          background-color: ${props.theme.secondaryColor1};
          color: ${props.theme.invertedTextColor};
        `
      )
    }
  }}

  @media screen and (max-width: 768px) {
    width: 329px;
  }
`