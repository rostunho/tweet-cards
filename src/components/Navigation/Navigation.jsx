import { AppNavigation, List, Item, Link } from './Navigation.styled';

export default function Navigation() {
  return (
    <AppNavigation>
      <List>
        <Item>
          <Link to="/">HOME</Link>
        </Item>
        <Item>
          <Link to="/tweets">TWEETS</Link>
        </Item>
      </List>
    </AppNavigation>
  );
}
