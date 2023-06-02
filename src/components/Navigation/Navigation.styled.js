import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const AppNavigation = styled.nav`
  position: relative;
  display: flex;
  align-items: center;
  height: 100%;
  /* margin-left: 200px; */

  &::before {
    content: '';
    display: block;
    position: absolute;
    left: -120px;
    width: 108px;
    height: 8px;

    background: #ebd8ff;
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
      inset 0px -1.71846px 3.43693px #ae7be3,
      inset 0px 3.43693px 2.5777px #fbf8ff;
    transform: rotate(-90deg);
  }
`;

export const List = styled.ul`
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
