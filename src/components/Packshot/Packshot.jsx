import { Wrapper, Heading, Tweet, Cards, Greeting } from './Packshot.styled';

export default function Packshot() {
  return (
    <Wrapper>
      <Heading>
        <Tweet>tweet</Tweet>
        <Cards>cards</Cards>
      </Heading>
      <div>
        <Greeting>well come</Greeting>
      </div>
    </Wrapper>
  );
}
