import styled from 'styled-components';

export const AppHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  height: 108px;
  border-radius: 20px;

  background-color: rgb(71, 28, 169);
  background-image: radial-gradient(
    circle,
    rgba(71, 28, 169, 1) 0%,
    rgba(87, 54, 163, 1) 56%,
    rgba(75, 42, 153, 1) 77%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
`;
