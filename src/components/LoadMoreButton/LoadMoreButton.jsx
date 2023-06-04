import { Button } from './LoadMoreButton.styled';

export default function LoadMoreButton({ children, style }) {
  return (
    <Button type="button" style={style}>
      {children}
    </Button>
  );
}
