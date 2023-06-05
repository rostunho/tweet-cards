import { Button } from './LoadMoreButton.styled';

export default function LoadMoreButton({ text, style, disabled, onClick }) {
  return (
    <Button type="button" style={style} onClick={onClick} disabled={disabled}>
      {text}
    </Button>
  );
}
