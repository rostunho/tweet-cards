import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;

  width: 196px;
  height: 50px;
  border-radius: 10px;
  outline: none;
  border: none;
  cursor: pointer;

  background-color: ${({ active }) => (active ? '#5CD3A8' : '#EBD8FF')};

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.222;
  text-transform: uppercase;
  color: #373737;

  &:hover {
    background-color: #5cd3a8;
  }
`;
