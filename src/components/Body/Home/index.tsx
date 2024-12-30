import { forwardRef, useContext } from 'react';
import { SecondRowContent } from './SecondRowContent';
import { LanguageContext } from '../../../contexts/LanguageContextData';
import {
  ContentContainer,
  ContentFirstRowConteiner,
  ContentSecondRowConteiner,
  FirstRowButtonConteiner,
  FirstRowContentConteiner,
  FirstRowLeftButton,
  FirstRowRightButton,
  HomeContainer,
} from './styles';

interface HomeType {  
  handleScrollIntoView: (reference: string) => void
}

export const Home = forwardRef<HTMLElement, HomeType & React.PropsWithChildren>((props, ref) => {

  const Language = useContext(LanguageContext) 

  function ScrollIntoView(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    const Id = event.currentTarget.id
    props.handleScrollIntoView(Id);
  }

  return (
    <HomeContainer ref={ref}>
      <ContentContainer>
        <ContentFirstRowConteiner>
          <FirstRowContentConteiner>
            <h1>{Language.FirstRowContentConteinerH1}</h1>
            <h4>{Language.FirstRowContentConteinerH4}</h4>
            <FirstRowButtonConteiner>
              <FirstRowLeftButton id='Contact' onClick={ScrollIntoView}>
                {Language.FirstRowLeftButton}
              </FirstRowLeftButton>
              <FirstRowRightButton id='Solutions' onClick={ScrollIntoView}>
                {Language.FirstRowRightButton}
              </FirstRowRightButton>
            </FirstRowButtonConteiner>
          </FirstRowContentConteiner>
        </ContentFirstRowConteiner>
        
        <ContentSecondRowConteiner>
          <SecondRowContent 
            icon="icon"
            title={Language.FirstSecondRowContentTitle}
            content={Language.FirstSecondRowContentContent}
            background="white"
          />
          <SecondRowContent 
            icon="icon"
            title={Language.SecondSecondRowContentTitle}
            content={Language.SecondSecondRowContentContent}
            background="white"
          />
          <SecondRowContent 
            icon="icon"
            title={Language.ThirdSecondRowContentTitle}
            content={Language.ThirdSecondRowContentContent}
            background="blue"
            textcolor="white"
          />
        </ContentSecondRowConteiner>
      </ContentContainer>
    </HomeContainer>
  )
})