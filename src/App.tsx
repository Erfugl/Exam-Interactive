import { useLocation } from 'react-router-dom';
import Header from './partials/Header.tsx';
import Main from './partials/Main.tsx';
import Footer from './partials/Footer.tsx';
import 'bootstrap/dist/css/bootstrap.min.css';



export default function App() {
  useLocation();
  window.scrollTo({ top: 0, left: 0, behavior: 'instant' });

  return <>
    <Header />
    <Main />
    <Footer />
  </>;
}