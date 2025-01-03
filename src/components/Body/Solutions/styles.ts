import styled from "styled-components";

interface imgURLType {
  url: string;
}

export const SolutionsContainer = styled.section`
  width: 100%;
  padding: 5rem 0;
`

export const SolutionsContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 3.125rem;

  p {
    font-weight: 500;
    font-size: 0.875rem;
    color: ${props => props.theme.secondtextColor};
  }
`

export const SolutionsContentTextContainer = styled.div`
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;

  h2 {
    font-weight: 700;
    font-size: 2.5rem;
  }

  @media screen and (max-width: 768px){
    text-align: center;
  }
`

export const SolutionsContentCardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.25rem;
  flex-wrap: wrap;
  
  @media screen and (max-width: 820px){
    flex-direction: column;
    flex-wrap: nowrap;
  }
`
export const SolutionsCardContainer = styled.div`
  
  height: 400px;

  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: 0.625rem;

  h3 {
    font-weight: 700;
    font-size: 1.5rem;
  }
  
  @media screen and (max-width: 1237px) {
    width: 300px;
  }
  @media screen and (min-width: 1343px) {
    width: 30.61%;
  }
`
export const SolutionCardImgContainer = styled.div<imgURLType>`
  width: 100%;
  height: 250px;
  background-image: url(${props => props.url});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top center;

  box-shadow: rgba(0, 0, 0, 0.25) 0px 5px 8px;
`