import { Item } from './Statistic.styled';

export default function Statistic({ children }) {
  return (
    <ul>
      {children.map((child, idx) => {
        return <Item key={idx}>{child}</Item>;
      })}
    </ul>
  );
}
