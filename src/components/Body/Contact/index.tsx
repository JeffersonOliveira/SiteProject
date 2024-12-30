import { forwardRef, useContext } from 'react';
import { LanguageContext } from '../../../contexts/LanguageContextData';
import {
  ContactContainer,
  ContactContentContainer,
  ContactContentFormContainer,
  ContactContentTextContainer,
  ContactFormContainer,
  WhiteBoxContainer,
} from './styles';

export const Contact = forwardRef<HTMLElement, React.PropsWithChildren>((_props, ref) => {

  const Language = useContext(LanguageContext)

  return (
    <ContactContainer ref={ref}>
      <ContactContentContainer>
        <ContactContentTextContainer>
          <h2>{Language.ContactContentTextContainerH2}</h2>
          <p>{Language.ContactContentTextContainerParagraph}</p>
        </ContactContentTextContainer>
        <ContactContentFormContainer>
          <WhiteBoxContainer/>
          <ContactFormContainer action="https://formsubmit.co/caio.vn.gald@gmail.com" method="POST">
            <input type="text" name="email" required placeholder={Language.ContactFormContainerEmail}/>
            <input type="text" name="_subject" required placeholder={Language.ContactFormContainerSubject}/>
            <textarea name="message" required id=""></textarea>
            <button type="submit">{Language.ContactFormContainerButton}</button>
          </ContactFormContainer>
          <WhiteBoxContainer/>
        </ContactContentFormContainer>
      </ContactContentContainer>
    </ContactContainer>
  )
})