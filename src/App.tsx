import { useLocation } from 'react-router-dom';
import Header from './partials/Header.tsx';
import Main from './partials/Main.tsx';
import Footer from './partials/Footer.tsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useLangRedirect, currentLang  } from './localizesroutes.ts';



export default function App() {
  useLangRedirect();

  useLocation();
  window.scrollTo({ top: 0, left: 0, behavior: 'instant' });

  document.querySelector('html')?.setAttribute('lang', currentLang())
  return <>
    <Header />
    <Main />
    <Footer />
  </>;
}