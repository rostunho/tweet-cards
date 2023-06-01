import { NavLink } from 'react-router-dom';

export default function Navigation() {
  return (
    <ul>
      <li>
        <NavLink to="/">HOME</NavLink>
      </li>
      <li>
        <NavLink to="/tweets">TWEETS</NavLink>
      </li>
    </ul>
  );
}
