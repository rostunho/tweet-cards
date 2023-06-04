import { Button } from './LoadMoreButton.styled';

export default function LoadMoreButton({ text, style }) {
  return (
    <Button type="button" style={style}>
      {text}
    </Button>
  );
}
