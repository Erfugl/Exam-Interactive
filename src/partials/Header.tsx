import { Link, NavLink } from 'react-router-dom';
import routes from '../routes';


export default function Header() {
  return <header>
    <Link to="/">
      <h1>Wilde Frames</h1>
    </Link>
    <nav>
      {routes.filter(x => x.menuLabel).map(({ menuLabel, path }, i) =>
        <NavLink className='links' key={i} to={path}>{menuLabel}</NavLink>)}
    </nav>
  </header>
}
