import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const AppNavigation = styled.nav`
  margin-left: 160px;
`;

export const List = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;

  list-style: none;
  margin: 0;
  padding: 0;
`;

export const Item = styled.li`
  &:first-child {
    margin-right: 40px;
  }
`;

export const Link = styled(NavLink)`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 1.2;
  text-transform: uppercase;
  text-decoration: none;
  color: #ebd8ff;

  &:hover,
  &:focus,
  &.active {
    color: #5cd3a8;
  }
`;
