import { useRetina } from 'hooks/useRetina';
import CircleIcon from 'icons/CircleIcon';
import defaultAvatar from 'images/default-avatar.jpg';
import defaultAvatar2x from 'images/default-avatar@2x.jpg';
import { AvatarWrapper, Photo } from './Avatar.styled';

export default function Avatar({ src, style }) {
  const isRetina = useRetina();
  const userAvatar = true; //replace to user avatar
  const userName = null; //replace to user name

  return (
    <AvatarWrapper style={style}>
      <CircleIcon style={{ position: 'absolute', zIndex: 10 }} />
      {userAvatar && <Photo src={src} alt={userName} />}
      {!userAvatar && (
        <Photo
          src={isRetina ? defaultAvatar2x : defaultAvatar}
          alt="default avatar"
        />
      )}
    </AvatarWrapper>
  );
}
