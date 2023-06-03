import { Text } from './StatsItem.styled';

export default function StatsItem({ data, text }) {
  return <Text>{data + ' ' + text}</Text>;
}
