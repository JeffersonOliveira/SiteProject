import styled from "styled-components";

export const ExperiencesContainer = styled.section`
  width: 100%;
  padding: 5rem 0;
`

export const ExperiencesContentContainer = styled.div`

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 3.125rem;
`

export const ExperiencesContentTextContainer = styled.div`
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

export const ExperiencesContentCardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.875rem;
  flex-wrap: wrap;

  @media screen and (max-width: 820px){
    flex-direction: column;
    flex-wrap: nowrap;
  }
`
export const ExperiencesCardContainer = styled.div`
  width: 240px;
  height: 209px;
  padding: 1.875rem 2.5rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  
  background: ${props => props.theme.backgroundColor};
  box-shadow: rgba(0, 0, 0, 0.1) 0px 3px 8px;

  span {
    color: ${props => props.theme.secondaryColor1}
  }

  h2 {
    font-weight: 700;
    font-size: 2.5rem;
  }

  h5 {
    font-weight: 500;
    font-size: 1rem;
    color: ${props => props.theme.secondtextColor};
  }
`

