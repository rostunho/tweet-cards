import Logo from 'components/Logo/Logo';
import Navigation from 'components/Navigation/Navigation';
import { AppHeader } from './Header.styled';

export default function Header({ children }) {
  return (
    <AppHeader>
      {/* <LogoIcon /> */}
      <Logo />
      <Navigation />
    </AppHeader>
  );
}
