/* eslint-disable @typescript-eslint/no-explicit-any */
import { AppContainer, BackgroundContainer, ScrollToTopButtonContainer } from './styles';
import { useEffect, useRef, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { DefaultTheme } from './styles/themes/default';
import { GlobalStyle } from './styles/global/global';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Body } from './components/Body';
import { ArrowUp } from '@phosphor-icons/react'
import smoothscroll from 'smoothscroll-polyfill';
import {
  LanguageContext,
  LanguageContextDataPt,
  LanguageContextDataEn,
  LanguageContextDataEs
} from './contexts/LanguageContextData';

export function App() {
  const homeRef = useRef<HTMLElement>(null);
  const experienceRef = useRef<HTMLElement>(null);
  const solutionsRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);
  const [languageContextValue, setLanguageContextValue] = useState(LanguageContextDataPt)
  const [showButton, setShowButton] = useState(true)
  const isBottom = (el: HTMLElement | HTMLDivElement | null) => {
    return el? el.getBoundingClientRect().bottom <= window.innerHeight : false;
  }
  
  useEffect(() => {
    smoothscroll.polyfill();
    (window as any).__forceSmoothScrollPolyfill__ = true;
  }, [])

  useEffect(() => {
    const trackScrolling = () => {
      if(isBottom(homeRef.current)) {
        setShowButton(false)
      }
      else {
        setShowButton(true)
      }
    }

    document.addEventListener('scroll', trackScrolling)
    return () =>
        document.removeEventListener('scroll', trackScrolling);
  }, [])

  function handleScrollToTop() {
    (window as any).scrollTo({top: 0, behavior: 'smooth'});
  }

  function handleScrollIntoView(reference: string) {

    switch (reference) {
      case "Experiences":
        experienceRef.current?.scrollIntoView({behavior: "smooth"});
      break;
      
      case "Solutions":
        solutionsRef.current?.scrollIntoView({behavior: "smooth"});
      break;
      
      case "Contact":
        contactRef.current?.scrollIntoView({behavior: "smooth"});
      break;
    
      default:
      break;
    }

  }

  function handleChangeLanguage(lang: string) {
    switch (lang) {
      case "pt":
      if(languageContextValue !== LanguageContextDataPt) setLanguageContextValue(LanguageContextDataPt)
      break;
      
      case "en":
      if(languageContextValue !== LanguageContextDataEn) setLanguageContextValue(LanguageContextDataEn)
      break;
      
      case "es":
      if(languageContextValue !== LanguageContextDataEs) setLanguageContextValue(LanguageContextDataEs)
      break;
      
      default:
      break;
    }
  }

  return (
    <>
      <ThemeProvider theme={DefaultTheme}>
        <BackgroundContainer/>
        <ScrollToTopButtonContainer disabled={showButton} onClick={handleScrollToTop}>
          <ArrowUp size={30}/>
        </ScrollToTopButtonContainer>
        <LanguageContext.Provider value={languageContextValue}>
          <AppContainer>
            <Header
              handleScrollIntoView={handleScrollIntoView}
              handleChangeLanguage={handleChangeLanguage}
            />
            <Body 
              homeRef={homeRef}
              experienceRef={experienceRef}
              solutionsRef={solutionsRef}
              contactRef={contactRef}
              handleScrollIntoView={handleScrollIntoView}
              />
            <Footer/>
          </AppContainer>
        </LanguageContext.Provider>
        <GlobalStyle/>
      </ThemeProvider>
    </>
  )
}
