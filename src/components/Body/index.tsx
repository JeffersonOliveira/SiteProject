import { BodyContainer } from './styles';
import { Experiences } from './Experiences';
import { RefObject } from 'react';
import { Solutions } from './Solutions';
import { Contact } from './Contact';
import { Slider } from './Slider';
import { Home } from './Home';

interface BodyType {
  homeRef: RefObject<HTMLElement>
  experienceRef: RefObject<HTMLElement>
  solutionsRef: RefObject<HTMLElement>
  contactRef: RefObject<HTMLElement>
  handleScrollIntoView: (reference: string) => void
}

export function Body({homeRef, experienceRef, solutionsRef, contactRef, handleScrollIntoView} : BodyType) {
  return (
    <BodyContainer>
      <Home 
        handleScrollIntoView={handleScrollIntoView}
        ref={homeRef}
      />
      <Experiences ref={experienceRef}/>
      <Slider/>
      <Solutions ref={solutionsRef}/>
      <Contact ref={contactRef}/>
    </BodyContainer>
  )
}