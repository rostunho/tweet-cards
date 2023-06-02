import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from 'components/Header/Header';
import { Main } from './SharedLayout.styles';

export default function SharedLayout() {
  return (
    <>
      <Header />
      <Main>
        <Suspense fallback={<p>... LOADING ...</p>}>
          <Outlet />
        </Suspense>
      </Main>
    </>
  );
}
