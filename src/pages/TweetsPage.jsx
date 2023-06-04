import TweetCard from 'components/TweetCard';
import LoadMoreButton from 'components/LoadMoreButton';

export default function TweetsPage() {
  return (
    <>
      <ul style={{ display: 'flex', justifyContent: 'space-between' }}>
        <TweetCard />
        <TweetCard />
        <TweetCard />
      </ul>
      <LoadMoreButton style={{ margin: '26px auto 0' }}>
        Load more
      </LoadMoreButton>
    </>
  );
}
