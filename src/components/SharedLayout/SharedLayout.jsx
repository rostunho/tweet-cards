import { Outlet } from 'react-router-dom';
import Container from 'components/Container/Container';
import Navigation from 'components/Navigation/Navigation';

export default function SharedLayout() {
  return (
    <Container>
      <header>
        <Navigation />
        <h1> HEADER</h1>
      </header>
      <Outlet />
    </Container>
  );
}
