import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import indexCssUrl from '../index.css?url';

export default function Layout() {
  return (
    <>
      <link rel="stylesheet" href={indexCssUrl} />
      <div className="mwspage-generic page basicpage cnt-wdth-lmtd page-type-theme wb-init page-type-theme-inited">
      <Header />
      <Outlet />
      <Footer />
    </div>
    </>
  );
}
