import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from 'components/Header/Header';

export default function SharedLayout() {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<p>... LOADING ...</p>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
}
