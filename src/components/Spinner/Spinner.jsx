// import { createPortal } from 'react-dom';
import { Spin, BackDrop } from './Spinner.styled';

export default function Spinner() {
  //   return createPortal(<Spin />, document.querySelector('#spinner-root'));
  return (
    <BackDrop>
      <Spin />
    </BackDrop>
  );
}
