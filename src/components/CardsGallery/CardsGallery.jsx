import TweetCard from 'components/TweetCard';
import LoadMoreButton from 'components/LoadMoreButton';
import { List } from './CardsGallery.styled';

export default function CardsGallery() {
  return (
    <>
      <List>
        <TweetCard />
        <TweetCard />
        <TweetCard />
      </List>
      <LoadMoreButton text="load more" style={{ marginTop: '40px' }} />
    </>
  );
}
