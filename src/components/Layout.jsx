import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

export default function Layout() {
  return (
    <div className="mwspage-generic page basicpage cnt-wdth-lmtd page-type-theme wb-init page-type-theme-inited">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
