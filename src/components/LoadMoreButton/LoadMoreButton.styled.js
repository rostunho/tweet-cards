import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;

  width: 212px;
  height: 50px;
  border-radius: 10px;
  border: none;
  background-color: #5cd3a8;
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  cursor: pointer;

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.222;
  text-transform: uppercase;
  color: #373737;

  &:hover {
    background-image: linear-gradient(
      114.99deg,
      #32ac80 -0.99%,
      #5cd3a8 54.28%,
      #32ac80 78.99%
    );
  }
`;
