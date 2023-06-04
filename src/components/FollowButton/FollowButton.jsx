import { Button } from './FollowButton.styled';

export default function FollowButton({ active, style, onClick }) {
  return (
    <Button type="button" active={active} style={style} onClick={onClick}>
      {active ? 'following' : 'follow'}
    </Button>
  );
}
