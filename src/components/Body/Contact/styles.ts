import styled from "styled-components";

export const ContactContainer = styled.section`
  width: 100%;
  padding: 5rem 0;
`

export const ContactContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 3.125rem;
`

export const ContactContentTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;

  h2 {
    font-weight: 700;
    font-size: 2.5rem;
  }

  p {
    font-weight: 500;
    font-size: 0.875rem;
    color: ${props => props.theme.secondtextColor};
  }

  @media screen and (max-width: 768px){
    text-align: center;
  }
`

export const ContactContentFormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;  
`
export const ContactFormContainer = styled.form`
  width: 345px;
  height: 393px;
  padding: 2rem;
  
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  background: ${props => props.theme.secondaryColor1};
  box-shadow: rgba(0, 0, 0, 0.25) 0px 3px 8px;

  input {
    padding: 0.3125rem 0.625rem;
    border: none;
    border-radius: 4px;
  }

  textarea {
    flex: 1;
    padding: 0.3125rem 0.625rem;
    border: none;
    border-radius: 4px;
    resize: none;
  }

  button {
    text-align: center;
    border: 1px solid ${props => props.theme.backgroundColor};
    border-radius: 4px;
    background: transparent;
    color: ${props => props.theme.backgroundColor};

    padding: 10px 20px;
    transition: 0.2s;
    
    cursor: pointer;

    &:hover {
      background: ${props => props.theme.invertedBackgroundColor};
      border: 1px solid ${props => props.theme.invertedBackgroundColor};
      font-weight: 500;
    }
  }

  @media screen and (max-width: 768px) {
    width: 50%;
  }
  @media screen and (max-width: 600px) {
    width: 70%;
  }
  @media screen and (max-width: 500px) {
    width: 100%;
  }
`
export const WhiteBoxContainer = styled.span`
  width: 20%;
  height: 333px;
  background: ${props => props.theme.backgroundColor};
  box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 8px;

  @media screen and (max-width: 500px) {
    display: none;
  }
`