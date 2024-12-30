import { forwardRef, useContext } from 'react';
import { 
  SolutionCardImgContainer,
  SolutionsCardContainer,
  SolutionsContainer,
  SolutionsContentCardContainer,
  SolutionsContentContainer,
  SolutionsContentTextContainer,
} from './styles';
import { LanguageContext } from '../../../contexts/LanguageContextData';

export const Solutions = forwardRef<HTMLElement, React.PropsWithChildren>((_props, ref) => {

  const Language = useContext(LanguageContext)
  
  return (
    <SolutionsContainer ref={ref}>
      <SolutionsContentContainer>
        <SolutionsContentTextContainer>
          <h2>{Language.SolutionsContentTextContainerH2}</h2>
          <p>{Language.SolutionsContentTextContainerParagraph}</p>
        </SolutionsContentTextContainer>
        <SolutionsContentCardContainer>
          <SolutionsCardContainer>
            <SolutionCardImgContainer url="https://img.freepik.com/free-photo/more-concepts-we-share-better_329181-17092.jpg?t=st=1731071632~exp=1731075232~hmac=a1706bdf776db454312f5528ddaeadae3f88eaba99fb55299e8f81dd82a73ac7&w=740"/>
            <h3>{Language.FirstSolutionsCardContainerH3}</h3>
            <p>{Language.FirstSolutionsCardContainerParagraph}</p>
          </SolutionsCardContainer>
          <SolutionsCardContainer>
            <SolutionCardImgContainer url="https://img.freepik.com/free-photo/business-owner-working-their-strategy_23-2149241290.jpg?t=st=1731071818~exp=1731075418~hmac=6e20ad637f86a917453164e278cd5b3751e2b2175300e20ad05b253eec8c9060&w=740"/>
            <h3>{Language.SecondSolutionsCardContainerH3}</h3>
            <p>{Language.SecondSolutionsCardContainerParagraph}</p>
          </SolutionsCardContainer>
          <SolutionsCardContainer>
            <SolutionCardImgContainer url="https://img.freepik.com/free-photo/teammates-working-late-office_23-2148991368.jpg?t=st=1731073053~exp=1731076653~hmac=3dc4848ca7b40b6f5b00fa0f0d4ad36e21ae013781fd8cf68083bf658e7abf3f&w=740"/> 
            <h3>{Language.ThirdSolutionsCardContainerH3}</h3>
            <p>{Language.ThirdSolutionsCardContainerParagraph}</p>
          </SolutionsCardContainer>
        </SolutionsContentCardContainer>
      </SolutionsContentContainer>
    </SolutionsContainer>
  )
})