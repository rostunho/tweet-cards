import styled from 'styled-components';

export const List = styled.ul`
  position: absolute;
  bottom: 48px;
  display: flex;
  justify-content: space-between;
  width: 1280px;
  padding: 0 40px;

  pointer-events: none;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 50px;
  height: 50px;

  border-radius: 50px;
  border: none;
  outline: none;
  cursor: pointer;
  pointer-events: auto;

  background-color: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);

    &:hover {
    background-image: linear-gradient(
      114.99deg,
      #D6B7F6 -0.99%,
      #ebd8ff 54.28%,
      #D6B7F6 78.99%
    );
`;
