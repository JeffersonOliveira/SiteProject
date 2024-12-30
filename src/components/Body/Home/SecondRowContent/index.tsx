import { SecondRowContentConteiner } from './styles';

interface SecondRowContentType {
  icon: string;
  title: string;
  content: string;
  background: string;
  textcolor?: string;
}

export function SecondRowContent({ icon, title, content, background, textcolor } : SecondRowContentType) {

  return (
    <SecondRowContentConteiner background={background} textcolor={textcolor}>
      <span>{icon}</span>
      <h3>{title}</h3>
      <p>{content}</p>
    </SecondRowContentConteiner>
  )
}