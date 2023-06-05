import { Button } from './LoadMoreButton.styled';

export default function LoadMoreButton({ text, style, onClick }) {
  return (
    <Button type="button" style={style} onClick={onClick}>
      {text}
    </Button>
  );
}
