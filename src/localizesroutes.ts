import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import rawRoutes from './routes';

export const supportedLangs = ['en', 'no', 'sv'];

export interface LangRoute {
  path: string;
  langPath: string;
  [key: string]: any;
}

export function currentLang(raw = false) {
  let lang = location.pathname.slice(1, 3);
  if (!supportedLangs.includes(lang)) { lang = raw ? 'missing' : 'en'; }
  return lang;
}


export const routes: LangRoute[] = rawRoutes.map(route => {
  let path = route.path;
  path === '*' && (path = '/*');
  path = '/:lang' + path;
  return {
    ...route,
    path,
    // a getter for the correct path including language
    get langPath() {
      return path.replace(':lang/', currentLang() + '/');
    }
  };
});

export function useLangRedirect() {
  const navigate = useNavigate();
  useEffect(() => {
    let lang = currentLang(true);
    if (lang === 'missing') {
      const route = routeWithoutLang();
      navigate('/en' + route, { replace: true });
    }
  }, []);
}


export function routeWithoutLang() {
  const afterProtocol = location.href.split('://')[1];
  let route = afterProtocol.substring(afterProtocol.indexOf('/'));
  route = route
    .replace(/^(\/)[a-z]{2}\//, '/')
    .replace(/^(\/)[a-z]{2}$/, '/');
  route === '/' && (route = '');
  return route;
}