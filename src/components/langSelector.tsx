import { Nav, NavDropdown } from 'react-bootstrap';
import { routeWithoutLang } from '../localizesroutes';

const languages = [
  { code: 'en', label: 'English' },
  { code: 'no', label: 'Norwegian' },
  { code: 'sv', label: 'Swedish' },
];

function languageSelect(code: string) {
  location.replace(`/${code}${routeWithoutLang()}`);
}
export function LangSelector() {
  return (
    <Nav>
      <NavDropdown
        title={
          <>
            <i className="language-icon bi bi-globe2"></i>
            <span>Language</span>
          </>
        }
        className="language-dropdown"
        align="end"
      >
        {languages.map((lang) => (
          <NavDropdown.Item
            key={lang.code}
            onClick={() => languageSelect(lang.code)}
          >
            <span className={`fi fi-${lang.code} me-2`}></span>
            {lang.label}
          </NavDropdown.Item>
        ))}
      </NavDropdown>
    </Nav>
  );
}