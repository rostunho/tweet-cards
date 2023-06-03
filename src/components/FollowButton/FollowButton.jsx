import { useState } from 'react';
import { Button } from './FollowButton.styled';

export default function FollowButton({ style }) {
  const [isActive, setIsActive] = useState(false); // change to useSelector

  return (
    <Button
      type="button"
      active={isActive}
      style={style}
      onClick={() => setIsActive(isActive => !isActive)}
    >
      {isActive ? 'following' : 'follow'}
    </Button>
  );
}
