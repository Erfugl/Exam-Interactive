import { Link, NavLink, useLocation } from 'react-router-dom';
import { CartButton } from '../components/shoppingCart';
import { LangSelector } from '../components/langSelector';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useState } from 'react';
import { routes, currentLang } from '../localizesroutes';

export default function Header() {
  // whether the navbar is expanded or not
  // (we use this to close it after a click/selection)
  const [expanded, setExpanded] = useState(false);

  //  get the current route
  const pathName = useLocation().pathname;
  const currentRoute = routes
    .slice().sort((a, b) =>
      a.langPath.length > b.langPath.length ? -1 : 1)
    .find(x => pathName.indexOf(x.langPath.split(':')[0]) === 0);
  // function that returns true if a menu item is 'active'
  const isActive = (path: string) =>
    path === currentRoute?.path || path === currentRoute?.parent;

  return <header>
    <Navbar
      expanded={expanded}
      expand="md"
      data-bs-theme="dark"
    >
      <Container fluid>
        <Navbar.Brand className="me-5" as={Link} to={'/' + currentLang()}>
          Wilde Frames
        </Navbar.Brand>
        <Navbar.Toggle onClick={() => setExpanded(!expanded)} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav style={{ cursor: "pointer" }}>
            {routes.filter(x => x.menuLabel).map(
              ({ menuLabel, langPath }, i) =>
                <Nav.Link
                  as={Link} key={i} to={langPath}
                  className={isActive(langPath + '') ? 'active' : ''}
                  /* close menu after selection*/
                  onClick={() => setTimeout(() => setExpanded(false), 200)}
                >{menuLabel}</Nav.Link>
            )}
          </Nav>
          <LangSelector />
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <CartButton />
  </header >;
}
{/* <Link to="/">
      <h1>Wilde Frames</h1>
    </Link>
    <nav>
      {routes.filter(x => x.menuLabel).map(({ menuLabel, path }, i) =>
        <NavLink className='links' key={i} to={path}>{menuLabel}</NavLink>)}
    </nav>
    
    <LangSelector />
  </header> */}


