import { forwardRef, useContext } from 'react';
import { LanguageContext } from '../../../contexts/LanguageContextData';
import { 
  ExperiencesCardContainer,
  ExperiencesContainer,
  ExperiencesContentCardContainer,
  ExperiencesContentContainer,
  ExperiencesContentTextContainer
} from './styles';

export const Experiences = forwardRef<HTMLElement, React.PropsWithChildren>((_props, ref) => {
  
  const Language = useContext(LanguageContext)

  return (
    <ExperiencesContainer ref={ref}>
      <ExperiencesContentContainer>
        <ExperiencesContentTextContainer>
          <h2>{Language.ExperiencesContentTextContainerH2}</h2>
          <p>{Language.ExperiencesContentTextContainerParagraph}</p>
        </ExperiencesContentTextContainer>
        <ExperiencesContentCardContainer>
          <ExperiencesCardContainer>
            <span>icon</span>
            <h2>{Language.FirstExperiencesCardContainerH2}</h2>
            <h5>{Language.FirstExperiencesCardContainerH5}</h5>
          </ExperiencesCardContainer>
          <ExperiencesCardContainer>
            <span>icon</span>
            <h2>{Language.SecondExperiencesCardContainerH2}</h2>
            <h5>{Language.SecondExperiencesCardContainerH5}</h5>
          </ExperiencesCardContainer>
          <ExperiencesCardContainer>
            <span>icon</span>
            <h2>{Language.ThirdExperiencesCardContainerH2}</h2>
            <h5>{Language.ThirdExperiencesCardContainerH5}</h5>
          </ExperiencesCardContainer>
        </ExperiencesContentCardContainer>
      </ExperiencesContentContainer>
    </ExperiencesContainer>
  )
})