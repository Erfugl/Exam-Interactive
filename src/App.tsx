import { useLocation } from 'react-router-dom';
import Header from './partials/header.tsx';
import Main from './partials/main.tsx';
import Footer from './partials/footer.tsx';



export default function App() {
  useLocation();
  window.scrollTo({ top: 0, left: 0, behavior: 'instant' });

  return <>
    <Header />
    <Main />
    <Footer />
  </>;
}