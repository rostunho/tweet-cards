import TweetCard from 'components/TweetCard/TweetCard';

export default function TweetsPage() {
  return (
    <ul style={{ display: 'flex', justifyContent: 'space-between' }}>
      <TweetCard />
      <TweetCard />
      <TweetCard />
    </ul>
  );
}
